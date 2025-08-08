import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model'; // Import the Product interface
import { CommonModule } from '@angular/common';
import { HomePage } from '../home-page/home-page';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule],
  templateUrl: './product-page.html',
  styleUrls: ['./product-page.scss']
})
export class ProductPage implements OnInit {
  private route = inject(ActivatedRoute);
  private allProducts: Product[] = new HomePage().products;

  product: Product | undefined;

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.product = this.allProducts.find(p => p.id === productId);
    }
  }
}
