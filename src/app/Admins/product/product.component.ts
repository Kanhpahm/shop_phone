import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.onGetList()
  }

  // tạo danh sách mới
  onGetList() {
    this.productService.getProducts().subscribe((data) => {
      // subcribe là theo dõi các thay đổi của dữ liệu hoặc nhận về kết quả của một công việc nào đó.
      this.products = data;
    })
  }
  confirmDelete(id: number | string) {
    if (confirm('Do you want to delete this product?')) {
      this.onDelete(id);
    }
  }
  onDelete(id: number | string) {
    this.productService.deletePrd(id).subscribe(() => {
      this.onGetList();
    })

  }
  parentChangeStatus(newStatus: number, product: any) {
    this.productService.updatePrd(
      // lấy tất cả thuộc tính của thằng product và chỉ thay status  bằng new Status
      product.id,
      {
        ...product, // có tất cả thuộc tính của thằng prd
        status: newStatus // chỉ  thay đổi thuộc tính status = newStatus
      }).subscribe(() => {
        this.onGetList();
      })
  }

}
