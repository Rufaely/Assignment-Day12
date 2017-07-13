import { Directive, ElementRef, Renderer,TemplateRef,ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {

  @Input('visibilty') Myvisibilty = true  ;
  constructor(private e: ElementRef, private r: Renderer) { 
   
  }   
  ngOnInit(){
     if(this.Myvisibilty)
    this.r.setElementStyle(this.e.nativeElement, 'display', "none")
  }
}
