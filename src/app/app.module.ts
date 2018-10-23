import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
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
    AppMaterialModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
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
