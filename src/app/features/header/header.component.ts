import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // typescript
  @ViewChild('navbar', { static: true }) navbar: ElementRef;

  @HostListener('window:scroll', []) onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.navbar.nativeElement.classList.add('navbar-scrolled');
    } else {
      this.navbar.nativeElement.classList.remove('navbar-scrolled');
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
