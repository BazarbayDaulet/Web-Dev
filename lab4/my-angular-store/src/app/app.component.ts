import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to My Store</h1>
    <app-products></app-products>
  `,
  standalone: true,
  imports: [ProductsComponent],
})
export class AppComponent {}
