import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSize]'
})
export class SizeDirective {
  @HostBinding("style.font-size.px") size = 20;
  
  @HostListener("mouseover")
  onHover() {
    this.size = 35;
  }
}
