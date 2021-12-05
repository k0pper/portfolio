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
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
      const navbar = this.document.getElementById('sticky-navbar');
      // determine whether navbar is at top of screen
      
      if (navbar) {
        if (navbar.getBoundingClientRect().top <= 0) {
          navbar.classList.add('sticky-style');
        } else {
          navbar.classList.remove('sticky-style');
        }
      }

    }
  }

 
