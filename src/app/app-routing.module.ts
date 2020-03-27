import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =
[
  { path: 'product', loadChildren: () => import('./modules/feature/product/product.module').then(m => m.ProductModule) },
  { path: 'checkout', loadChildren: () => import('./modules/feature/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'admin', loadChildren: () => import('./modules/feature/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
