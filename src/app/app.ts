import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardProduto } from './card-produto/card-produto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardProduto],
  template: `
    <div class="product-list-container">
      @for (product of products; track product.id) {
        <app-card-produto
          [name]="product.name"
          [price]="product.price"
          [productImg]="product.image"
        />
      }
    </div>`,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Smart-Outlet-LG';
  protected products = [
       {id: 1, name: "Geladeira Frost Free", price: "5000.00", image: "https://placehold.co/300x300/e2e8f0/475569?text=Geladeira" },
        {id:2, name: "Micro-ondas 20L", price: "550.00", image: "https://placehold.co/300x300/e2e8f0/475569?text=Micro-ondas" },
        {id:3, name: "Lavadora de Roupas 12kg dupler inverter 375L", price: "2500.00", image: "https://placehold.co/300x300/e2e8f0/475569?text=Lavadora" },
        {id:4, name: "TV 50 polegadas", price: "2500.00", image: "https://placehold.co/300x300/e2e8f0/475569?text=TV" }
  ];
}
