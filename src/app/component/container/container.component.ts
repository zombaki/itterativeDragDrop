import { Component, OnInit, Input } from '@angular/core';
import { Container, Constants, Composite } from '../../types';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input()
  container: Container;

  connectedLists: string[];

  constructor() { }

  ngOnInit() {
    this.connectedLists = new Constants().getContainerIds();
  }

    drop(event: CdkDragDrop<any>) {
    const data: [Composite, Container] = event.item.data;
    data[1].removeChild(data[0]);

    if(this.container.children[event.currentIndex] === undefined || this.container.children[event.currentIndex].id !== data[0].id) {
      this.container.children = this.container.children.slice(0, event.currentIndex).concat(data[0],
        this.container.children.slice(event.currentIndex));
    }
  }
}