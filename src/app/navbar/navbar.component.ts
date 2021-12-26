import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngOnInit(): void {
    // this.refreshStickyClasses();
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.refreshStickyClasses();
  // }

  // @HostListener('window:resize', [])
  // onWindowResize() {
  //   this.refreshStickyClasses();
  // }

  // private refreshStickyClasses() {
  //   const navbarBig = this.document.getElementById('big-screen-header');
  //   if (navbarBig) {
  //     if (window.innerWidth < 768) {
  //       navbarBig.classList.remove("sticky");
  //     } else {
  //       navbarBig.classList.add("sticky");
  //     }
  //   }

  //   const navbarSmall = this.document.getElementById('small-screen-header');
  //   if (navbarSmall) {
  //     if (navbarSmall.getBoundingClientRect().top <= 0) {
  //       navbarSmall.classList.add('sticky-style');
  //     } else {
  //       navbarSmall.classList.remove('sticky-style');
  //     }
  //   }

    
  // }
}




