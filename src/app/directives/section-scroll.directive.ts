import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[sectionScroll]',
})
export class SectionScrollDirective {
  private spiedTags = ['SECTION'];

  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection!: string;

  constructor(private _el: ElementRef) {}

  @HostListener('document:mousewheel', ['$event'])
  onScroll(event: any) {
    let currentSection = '';
    const childrens = this._el.nativeElement.children;
    const top = event.target.scrollTop;
    const parentOffset = event.target.offsetTop;
    for (let i = 0; i < childrens.length; i++) {
      const element = childrens[i];

      if (this.spiedTags.some((spiedTag) => spiedTag === element.tagName)) {
        if (element.offsetTop - parentOffset <= top) {
          currentSection = element.id;
        }
      }
    }
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }
}
