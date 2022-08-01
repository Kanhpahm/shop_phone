import { Component, OnInit, Pipe } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


// @Pipe({name:'split'});

@Component({
    selector: 'app-show-product',
    templateUrl: './show-product.component.html',
  })

export class ShowProductComponent implements OnInit {
  
  products:any;
  constructor(
    private productService :ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data =>{
      this.products = Object.values(data).filter(element => {
        return element.status == 1
      });
    })
    
  }
  
  
  

}
