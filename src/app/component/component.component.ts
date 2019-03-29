import { Component, OnInit,  Input } from '@angular/core';
import { Composite, Container, Containee, CompositeVisitor } from '../types';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  @Input()
  item: Composite;
  
  container: Container;
  containee: Containee;

  constructor() { }

  ngOnInit() {
    this.item.accept(new GetConcreteTypeVisitor(this));
  }

}
class GetConcreteTypeVisitor implements CompositeVisitor {
  
  constructor(private parent: ComponentComponent) { }

  handleContainer(container: Container) {
    this.parent.container = container;
  }

  handleContainee(containee: Containee) {
    this.parent.containee = containee;
  }
}