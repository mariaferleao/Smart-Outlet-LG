import { Component, input } from '@angular/core';
import { Product } from '../models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-produto',
  // Link the SCSS file to the component
  imports: [RouterLink],
  standalone: true,
  styleUrls: ['./card-produto.scss'],
  // The template now uses the clean, semantic class names
  templateUrl: './card-produto.html'
})
export class CardProduto {
  product = input.required<Product>();
}
