import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  id: string | undefined;
  imageBase64: any;
  productForm: FormGroup;
  constructor(
    private ProductService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      old_price: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      status: new FormControl(1),
      desc: new FormControl('', Validators.required),
      image: new FormControl('')
    })
  }

  ngOnInit(): void {

  }
  onSubmit(obj:
    {
      name: string,
      old_price: number,
      status: number,
      price: number,
      desc: string,
    }) {

    const submitData = {
      ...obj,
      image: this.imageBase64
    };

    return this.ProductService.createPrd(submitData).subscribe(() => {
      alert('Thêm thành công !')
      this.router.navigate(['admin/phones']);
      
    });
  }

  resultString(e: any) {
    if (e && e.target && typeof e.target.result == 'string') {
      return e.target.result;
    }
    return '';
  }
  
  changeAvatar(event: any) {
    const arrayImageTypes = ['image/png', 'image/jpg','image/jpeg'];
    const file = event.target.files[0];
    if (file.size > 50000000) {
      return alert('Kích thước file quá lớn');
    } else if (!arrayImageTypes.includes(file.type)) {
      return alert('Kiểu dữ liệu không phù hợp');
    }
    console.log(file.size, file.type); // 1. Định nghĩa 1 thể hiện của FileReader để đọc file
    const reader = new FileReader();   // 2. Định nghĩa phương thức đọc file
    reader.onload = (e) => {
      this.imageBase64 = e.target?.result;
      const image = new Image();
      image.src = this.resultString(e);
      console.log(image.width, image.height);
    }
    reader.readAsDataURL(file);        // 3. Đây là lúc bắt đầu đọc file để chạy phần 2. 
  }

}
