import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  // Link the SCSS file to the component
  styleUrls: ['./card-produto.scss'],
  // The template now uses the clean, semantic class names
  templateUrl: './card-produto.html'
})
export class CardProduto {
  name = input.required<string>();
  price = input.required<string>();
  productImg = input.required<string>();
}
