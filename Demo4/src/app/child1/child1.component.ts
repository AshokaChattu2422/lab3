import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
  <p *ngIf="Compydata">welcome to company</p>
  <p *ngIf="!Compydata">please log in </p>
  `,
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input() Company: boolean;
  constructor() { }

  ngOnInit() {
  }

}
