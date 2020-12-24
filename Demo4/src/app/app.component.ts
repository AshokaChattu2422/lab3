import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Angular Communication between parent and child ';
  greet(data: any) {
    alert(`The customer ${data.name} is location at ${data.address} and contact is ${data.contact}`);
  }
}
