import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app is working';
  private names:string[] = ['Rufael', 'Kidane', 'Mariam', 'Yohannes'];
  //public val=true;

}
