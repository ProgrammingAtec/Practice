import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFlexAlignContent]'
})
export class FlexAlignContentDirective implements AfterViewInit, OnInit {

  public constructor(private host: ElementRef) {
  }

  @Input() public flexAlignContent: string;

  private currentElement: CSSStyleDeclaration;

  @HostListener('mouseover') onMouseover() {
    this.currentElement.backgroundColor = '#beebe9';
    this.currentElement.cursor = 'pointer';
  }

  @HostListener('mouseout') onMouseout() {
    this.currentElement.backgroundColor = '#fff';
  }

  public ngOnInit() {
    this.currentElement = this.host.nativeElement.style;
  }

  public ngAfterViewInit() {
  }
}
