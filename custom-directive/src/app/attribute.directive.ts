import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[zoom]',
})
export class AttributeDirective {
  @Input('zoom') size:any

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseIn() {
    this.setFontSize(this.size)
  }

  @HostListener('mouseleave') onMouseOut() {
    this.setFontSize(14)
  }

  setFontSize(value: number | string): void {
    this.el.nativeElement.style.fontSize = `${value}px`
  }
}

