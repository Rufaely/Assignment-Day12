import { Directive,ElementRef, Renderer,AfterViewInit  } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private e: ElementRef, private r: Renderer) {  
    //this.r.setElementStyle(this.e.nativeElement, 'text-transform', 'uppercase');
  }
ngAfterViewInit(){
        this. r.setElementProperty(this.e.nativeElement, 'innerText', this.e.nativeElement.innerHTML.toUpperCase()); 
    }

}