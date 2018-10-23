import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CategoriesComponent } from './categories/categories.component';
import { SupportContactComponent } from './support-contact/support-contact.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    MainNavComponent,
    AddRecipeComponent,
    RecipesComponent,
    CategoriesComponent,
    SupportContactComponent,
    NotFound404Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
