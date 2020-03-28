import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/feature/home/home/home.component';

const routes: Routes =
[
  { path: 'home', component: HomeComponent },
  { path: 'product', loadChildren: () => import('./modules/feature/product/product.module').then(m => m.ProductModule) },
  { path: 'checkout', loadChildren: () => import('./modules/feature/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'admin', loadChildren: () => import('./modules/feature/admin/admin.module').then(m => m.AdminModule)},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
