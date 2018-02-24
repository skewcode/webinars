import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  DEFAULT_HIGHLIGHT_COLOR = 'GREENYELLOW';

  // tslint:disable-next-line:no-input-rename
  @Input('appHighlight') highlightColor: string;

  constructor(private hostElement: ElementRef) {}

  ngOnInit() {
    this.setBackgroundColor('');
  }

  @HostListener('mouseenter')
  mouseOver() {
    this.setBackgroundColor(
      this.highlightColor || this.DEFAULT_HIGHLIGHT_COLOR
    );
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.setBackgroundColor('');
  }

  private setBackgroundColor(color: string) {
    this.hostElement.nativeElement.style.backgroundColor = color;
  }
}
