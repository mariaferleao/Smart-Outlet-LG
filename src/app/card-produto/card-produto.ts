import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  // Link the SCSS file to the component
  styleUrls: ['./card-produto.scss'],
  // The template now uses the clean, semantic class names
  template: `
    <div class="product-card">
      <div class="product-info">
        <div class="copy-code">
          <h2 class="product-code">GN-B372PFMB</h2>
          <input type="image" src="assets/copy.svg" alt="copy" class="copy-icon">
        </div>
        <div class="product-quality">
        Classe A
        </div>
      </div>
      <h2 class="product-name">{{ name() }}</h2>
      <h2 class="product-stock">4 unidades</h2>

      <img [src]="productImg()" alt="Image of {{ name() }}" class="product-image">

      <div class="price-section">
        <p class="product-price">R$ {{ price() }}</p>
        <p class="payment-method">À vista no PIX</p>
      </div>

      <div class="actions">
        <button class="btn-primary">Solicitar</button>
        <button class="btn-secondary">Mais Informações</button>
      </div>
    </div>
  `
})
export class CardProduto {
  name = input.required<string>();
  price = input.required<string>();
  productImg = input.required<string>();
}
