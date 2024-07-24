import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarRoute } from '../../../models/navbar-route.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  routes: NavbarRoute[] = [
    {
      name: 'Početna',
      href: '/',
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
}
