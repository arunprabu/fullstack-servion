import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {
  element: any;

  constructor( private elementRef: ElementRef, private renderer: Renderer2 ) {
    console.log('inside colorizer directive');
    console.log(this.elementRef.nativeElement);
    this.element = this.elementRef.nativeElement;
    // this.element.style.backgroundColor = 'red';
    // this.element.style.color = 'white';
    // this.element.style.height = '100px';

    this.renderer.setStyle(this.element, 'background-color', 'red');
    this.renderer.setStyle(this.element, 'color', 'white');
    this.renderer.setStyle(this.element, 'height', '100px');

  }

  @HostListener('click') onChangeColorClick() {
    this.renderer.setStyle(this.element, 'backgroundColor', 
    'yellow');
  }

}
