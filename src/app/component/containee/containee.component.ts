import { Component, OnInit, Input } from '@angular/core';
import { Containee } from '../../types'

@Component({
  selector: 'app-containee',
  templateUrl: './containee.component.html',
  styleUrls: ['./containee.component.css']
})
export class ContaineeComponent implements OnInit {
  @Input()
  containee: Containee;

  constructor() { }

  ngOnInit() {
  }

}