import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user.module';
import { NavbarRoute } from '../../../models/navbar-route.module';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user: User = {
    id:1,
    name: 'Luka Milaš',
    email: 'luka24@gmail.com',
    phone: '059230833'
  }

  // user: User | null = null;

  constructor(private sanitizer: DomSanitizer, public router: Router) {}
  sanitizeSvg(svgContent:  string | undefined): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent || '');
  }

  routes: NavbarRoute[] = [
    {
      name: 'Početna',
      href: '/',
      // svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      //         <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      //       </svg>`
    },
    {
      name: 'Proizvodi',
      href: '/proizvodi'
    },
    {
      name: 'Kontakt',
      href: '/kontakt'
    },
  ]

  isVisible: boolean = false;

  toggleMenu() {
    this.isVisible = !this.isVisible;
  }
}
