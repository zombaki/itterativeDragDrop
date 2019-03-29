import { Component, OnInit } from '@angular/core';
import { Composite, Container, Containee, Constants } from '../types'
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root-list',
  templateUrl: './root-list.component.html',
  styleUrls: ['./root-list.component.css']
})
export class RootListComponent implements OnInit {

  rootContainer: Container ;
  connectedLists: string[];

  constructor() {
    this.rootContainer = new Constants().getRootContainer();
    this.connectedLists = new Constants().getContainerIds();
  }

  drop(event: CdkDragDrop<any>) {
    const data: [Composite, Container] = event.item.data;
    data[1].removeChild(data[0]);

    if(this.rootContainer.children[event.currentIndex] === undefined || this.rootContainer.children[event.currentIndex].id !== data[0].id) {
      this.rootContainer.children = this.rootContainer.children.slice(0, event.currentIndex).concat(data[0], this.rootContainer.children.slice(event.currentIndex));
    }
  }

  ngOnInit() {

  }

}
