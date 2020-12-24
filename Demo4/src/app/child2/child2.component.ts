import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Output() greetEvent = new EventEmitter();
  data = {
    name: 'Ashoka',
    address: 'slpt',
    contact:'9010040789'
  };
  constructor() { }

  ngOnInit() {
  }
  callParentGreet() {
    this.greetEvent.emit(this.data);
  }
}
