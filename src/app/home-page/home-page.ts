import { Component } from '@angular/core';
import { CardProduto } from '../card-produto/card-produto';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home-page',
  imports: [CardProduto, CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
  public products: Product[] = [
    {
      id: "GN-B372PFMA",
      name: "Geladeira Frost Free",
      quality: "Classe A",
      description: "Geladeira Frost Free com tecnologia Inverter e 375L de capacidade.",
      img: "assets/geladeira.png", // Corrected path to use local asset
      stock: 10,
      price: 5000.00
    },
    {
      id: "GN-B372PFMB",
      name: "Micro-ondas 20L",
      quality: "Classe B",
      description: "Micro-ondas de 20L com painel digital e diversas funções.",
      img: "https://placehold.co/300x300/e2e8f0/475569?text=Micro-ondas",
      stock: 15,
      price: 550.00
    },
    {
      id: "GN-B372PFMC",
      name: "Lavadora de Roupas 12kg",
      quality: "Classe A",
      description: "Lavadora de Roupas com capacidade de 12kg e motor Inverter.",
      img: "https://placehold.co/300x300/e2e8f0/475569?text=Lavadora",
      stock: 8,
      price: 2500.00
    },
    {
      id: "GN-B372PFMD",
      name: "TV 50 polegadas",
      quality: "Classe C",
      description: "Smart TV 4K de 50 polegadas com sistema webOS.",
      img: "https://placehold.co/300x300/e2e8f0/475569?text=TV",
      stock: 20,
      price: 2500.00
    },
    {
      id: "GN-B372PFME",
      name: "Geladeira Frost Free",
      quality: "Classe A",
      description: "Geladeira Frost Free com tecnologia Inverter e 375L de capacidade.",
      img: "assets/geladeira.png", // Corrected path to use local asset
      stock: 5,
      price: 5000.00
    },
    {
      id: "GN-B372PFMF",
      name: "Micro-ondas 20L",
      quality: "Classe D",
      description: "Micro-ondas de 20L com painel digital e diversas funções.",
      img: "https://placehold.co/300x300/e2e8f0/475569?text=Micro-ondas",
      stock: 12,
      price: 550.00
    },
    {
      id: "GN-B372PFMG",
      name: "Lavadora de Roupas 12kg",
      quality: "Classe B",
      description: "Lavadora de Roupas com capacidade de 12kg e motor Inverter.",
      img: "https://placehold.co/300x300/e2e8f0/475569?text=Lavadora",
      stock: 9,
      price: 2500.00
    },
    {
      id: "GN-B372PFMH",
      name: "TV 50 polegadas",
      quality: "Classe A",
      description: "Smart TV 4K de 50 polegadas com sistema webOS.",
      img: "https://placehold.co/300x300/e2e8f0/475569?text=TV",
      stock: 18,
      price: 2500.00
    }
  ];
}
