// Import necessary Angular routing classes and your components
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';

// Define and export the routes
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'proizvodi', component: ProductsComponent },
  { path: 'kontakt', component: ContactComponent },
];