import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({
  selector: '[flexAlignContent]'
})
export class FlexAlignContent implements AfterViewInit, OnInit {
  @Input() public flexAlignContent: string;

  @HostListener('mouseover') onMouseover() {
    this.currentElement.backgroundColor = '#beebe9';
  }

  @HostListener('mouseout') onMouseout() {
    this.currentElement.backgroundColor = '#fff';
  }

  private currentElement: CSSStyleDeclaration;

  public constructor(private host: ElementRef) {
  }

  public ngOnInit() {
    this.currentElement = this.host.nativeElement.style;
  }

  public ngAfterViewInit() {
  }
}
