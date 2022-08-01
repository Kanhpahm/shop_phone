import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ClientComponent } from './layouts/client/client.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderClientComponent } from './layouts/header-client/header-client.component';
import { FooterClientComponent } from './layouts/footer-client/footer-client.component';
import { ShowProductComponent } from './Clients/show-product/show-product.component';
import { MainClientComponent } from './layouts/main-client/main-client.component';
import { ShowProductDetailComponent } from './Clients/show-product-detail/show-product-detail.component';
import { ProductComponent } from './Admins/product/product.component';
import { ProductFormComponent } from './Admins/product-form/product-form.component';
import {  HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { ProductDetailComponent } from './Admins/product-detail/product-detail.component';
import { StatusBtnComponent } from './Components/status-btn/status-btn.component';
import { ShowErrComponent } from './Components/show-err/show-err.component';
import { StudentComponent } from './Admins/student/student.component';
import { ProductEditComponent } from './Admins/product-edit/product-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    LoginComponent,
    HeaderClientComponent,
    FooterClientComponent,
    ShowProductComponent,
    MainClientComponent,
    ShowProductDetailComponent,
    ProductComponent,
    ProductFormComponent,
    ProductDetailComponent,
    StatusBtnComponent,
    ShowErrComponent,
    StudentComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
  //   {provide:LOCALE_ID,
  //  useValue: 'vi-Vi' 
  //  },
   ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
