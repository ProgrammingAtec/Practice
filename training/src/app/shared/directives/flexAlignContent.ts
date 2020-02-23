import {AfterViewInit, Directive, ElementRef, Input} from "@angular/core";

@Directive({
  selector: '[flexAlignContent]'
})
export class FlexAlignContent implements AfterViewInit {
  @Input() public flexAlignContent: string;

  public constructor(private host: ElementRef) {
  }

  public ngAfterViewInit() {
    console.log(this.flexAlignContent);
  }
}
