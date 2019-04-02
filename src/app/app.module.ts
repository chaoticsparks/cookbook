import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { CategoriesComponent } from './categories/categories.component';
import { SupportContactComponent } from './support-contact/support-contact.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AuthModule} from './auth/auth.module';


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    RecipesModule,
    AuthModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    CategoriesComponent,
    SupportContactComponent,
    NotFound404Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
