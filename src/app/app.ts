import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardProduto } from './card-produto/card-produto';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardProduto, Navbar],
  templateUrl: 'app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Smart-Outlet-LG';
  protected products = [
       {id: 1, name: "Geladeira Frost Free", price: "5000.00", image: "https://placehold.co/300x300/e2e8f0/475569?text=Geladeira" },
        {id:2, name: "Micro-ondas 20L", price: "550.00", image: "https://placehold.co/300x300/e2e8f0/475569?text=Micro-ondas" },
        {id:3, name: "Lavadora de Roupas 12kg dupler inverter 375L", price: "2500.00", image: "https://placehold.co/300x300/e2e8f0/475569?text=Lavadora" },
        {id:4, name: "TV 50 polegadas", price: "2500.00", image: "https://placehold.co/300x300/e2e8f0/475569?text=TV" },
       {id: 5, name: "Geladeira Frost Free", price: "5000.00", image: "https://placehold.co/300x300/e2e8f0/475569?text=Geladeira" },
        {id:6, name: "Micro-ondas 20L", price: "550.00", image: "https://placehold.co/300x300/e2e8f0/475569?text=Micro-ondas" },
        {id:7, name: "Lavadora de Roupas 12kg dupler inverter 375L", price: "2500.00", image: "https://placehold.co/300x300/e2e8f0/475569?text=Lavadora" },
        {id:8, name: "TV 50 polegadas", price: "2500.00", image: "https://placehold.co/300x300/e2e8f0/475569?text=TV" }
  ];
}
