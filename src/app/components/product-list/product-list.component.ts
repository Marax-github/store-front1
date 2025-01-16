import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: false,
  
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];
  categoryId: number = 1;

  constructor(private productService: ProductService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      return this.productList();
    })
  
  }
  productList() {

    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id')!;
    
    if (hasCategoryId) {
      this.categoryId = +this.route.snapshot.paramMap.get('id')!;
    }else{
      this.categoryId = 1;
    }

    this.productService.getProductList(this.categoryId).subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
