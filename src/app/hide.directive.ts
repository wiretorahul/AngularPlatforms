import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective {

  @Input() check: boolean;
  
  constructor(public el: ElementRef, public rend: Renderer) {
  }

  ngOnInit() {
    if (this.check === true) {
      this.rend.setElementStyle(this.el.nativeElement, 'display', 'none');
    }

  }

  ngOnChanges(){
    if (this.check === true) {
      this.rend.setElementStyle(this.el.nativeElement, 'display', 'none');
    }else if(this.check === false){
      this.rend.setElementStyle(this.el.nativeElement, 'display', 'block');
    }
  }

  @HostListener('mouseover') onMouseEnter() {
    this.rend.setElementStyle(this.el.nativeElement, 'backgroundColor', 'lightgreen');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.rend.setElementStyle(this.el.nativeElement, 'backgroundColor', 'white');
  }


}