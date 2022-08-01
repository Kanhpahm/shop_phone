import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: string | undefined;
  product: any;
  imageBase64: any;
  productForm: FormGroup;
  constructor(
    private ProductService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      old_price: new FormControl(0, [Validators.required,]),
      price: new FormControl(0, [Validators.required,]),
      status: new FormControl(1),
      desc: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.ProductService.getProduct(this.id).subscribe(data => {
      this.product = data;
    })
  }
  onSubmit(obj: { name: string,old_price: number,status: number,price: number,desc: string,}) {
    if (!this.imageBase64) {
      this.imageBase64 = this.product.image;
    }
    const submitData = {
      ...obj,
      image: this.imageBase64
    };

    if (this.id) {
       this.ProductService.updatePrd(this.id, submitData).subscribe(data => {
        this.router.navigate(['admin/phones'])
      })
    }
    
  }
  resultString(e: any) {
    if (e && e.target && typeof e.target.result == 'string') {
      return e.target.result;
    }
    return '';
  }

  changeAvatar(event: any) {
    const arrayImageTypes = ['image/png', 'image/jpg', 'image/jpeg'];
    const file = event.target.files[0];
    if (file.size > 5000000000) {
      return alert(
        'Kích thước file quá lớn'
        );
    } else if (!arrayImageTypes.includes(file.type)) {
      return alert(
        'Kiểu dữ liệu không phù hợp'
        );
    }
    // 1. Định nghĩa 1 thể hiện của FileReader để đọc file
    const reader = new FileReader();
    // 2. Định nghĩa phương thức đọc file
    reader.onload = (e) => {
      this.imageBase64 = e.target?.result;
      const image = new Image();
      image.src = this.resultString(e);
    }
    // 3. Đây là lúc bắt đầu đọc file để chạy phần 2.
    reader.readAsDataURL(file);
  }
  


}
