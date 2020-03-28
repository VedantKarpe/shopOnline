import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations:
  [
    HomeComponent,
    UserDetailsComponent,
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    HomeComponent,
    UserDetailsComponent
  ]
})

export class HomeModule { }
