import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowProductComponent } from './Clients/show-product/show-product.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ClientComponent } from './layouts/client/client.component';
import { ShowProductDetailComponent } from './Clients/show-product-detail/show-product-detail.component';
import { ProductComponent } from './Admins/product/product.component';
import { ProductFormComponent } from './Admins/product-form/product-form.component';
import { ProductDetailComponent } from './Admins/product-detail/product-detail.component';
import { StudentComponent } from './Admins/student/student.component';
import { ProductEditComponent } from './Admins/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: StudentComponent
      },

      {
        path: 'phones',
        component: ShowProductComponent
      },
      {
        path: 'phones/detail/:id',
        component: ShowProductDetailComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'students',
        pathMatch: 'full'
      },

      {
        path: 'students',
        component: StudentComponent
      },
      {
        path: 'phones',
        component: ProductComponent
      }
      ,
      {
        path: 'phones/create',
        component: ProductFormComponent
      },
      {
        path: 'phones/edit/:id',
        component: ProductEditComponent
      },
      {
        path: 'phones/:id',
        component: ProductDetailComponent
      }

    ],

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
