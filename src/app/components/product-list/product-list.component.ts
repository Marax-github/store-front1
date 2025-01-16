import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];

   constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productList()
  }
  productList() {
    return this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
