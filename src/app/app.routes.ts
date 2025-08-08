import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ProductPage } from './product-page/product-page';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: HomePage },
  { path: 'product/:id', component: ProductPage }
];
