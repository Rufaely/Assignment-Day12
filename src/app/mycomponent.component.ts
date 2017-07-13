import { Component, OnInit,Input,ViewChild,ContentChild } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  template: `
  <p> An array of names </p>
     <ul >
     <li *ngFor="let name of names" >{{name}}</li>
     </ul>
     <p> To uppercases</p>
     <ul >
     <li *ngFor="let name of names" appUpper >{{name}}</li>
     </ul>
     <p> Visibility </p>
     <ul >
     <li *ngFor="let name of names" appUpper  appMyvisibility [visibilty]>{{name}}</li>
     </ul>
    <button [appMycolors]="colors" appMycolor (emitColor)="showColor($event)" >Change Color : {{myColor}}</button>
     
  `,
  styles: []
})
export class MycomponentComponent implements OnInit {

   public val:boolean=true;
  public colors:String[]=["red","blue","green","gray"];
  public myColor:string;
  //listEle=this.lists.NativeElement;
@Input() names:string[];
  constructor() {
   
   }
showColor(color:string){
this.myColor=color;
}
  ngOnInit() {
  }
}
