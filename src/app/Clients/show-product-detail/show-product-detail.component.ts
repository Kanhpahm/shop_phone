import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-show-product-detail',
  templateUrl: './show-product-detail.component.html',
  styleUrls: ['./show-product-detail.component.css']
})
export class ShowProductDetailComponent implements OnInit {
id:any
product:any
  constructor(
    private activedRoute :ActivatedRoute,
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.id = this.activedRoute.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(data=>{
      this.product = data
    })
  }
}
