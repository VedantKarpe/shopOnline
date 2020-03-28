import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../../shared/angular-material.module';


@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AngularMaterialModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
