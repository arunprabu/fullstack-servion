import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const productRoutes: Routes = [
  {
    path: 'products', children: [
      { path: '', component: ProductsComponent },
      { path: ':id', component: ProductDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
