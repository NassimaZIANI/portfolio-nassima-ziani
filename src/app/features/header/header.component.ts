import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentSection: string = 'home';
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
