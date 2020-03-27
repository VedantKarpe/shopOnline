import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations:
  [
    HomeComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    UserDetailsComponent
  ]
})

export class HomeModule { }
