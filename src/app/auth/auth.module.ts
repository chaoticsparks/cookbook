import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {AuthRoutingModule} from './auth-routing.module';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import {AppMaterialModule} from '../app-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AuthPanelComponent } from './auth-panel/auth-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AuthRoutingModule,
    AngularFireAuthModule
  ],
  declarations: [LoginPageComponent, LoginFormComponent, SignupPageComponent, SignupFormComponent, AuthPanelComponent],
  exports: [
    AuthPanelComponent
  ]
})
export class AuthModule { }
