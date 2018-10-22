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

const appRoutes: Routes = [
  { path: 'add-recipe', component: AddRecipeComponent},
  { path: 'recipes', component: RecipesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'support-contact', component: SupportContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AddRecipeComponent,
    RecipesComponent,
    CategoriesComponent,
    SupportContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
