import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatIconModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TreeComponent } from './tree/tree.component';
import { TreeElementComponent } from './tree/tree-element/tree-element.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule, BrowserAnimationsModule, MatSidenavModule, DragDropModule ],
  declarations: [ AppComponent,  TreeComponent, TreeElementComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
