import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
