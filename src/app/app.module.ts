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

const appRoutes: Routes = [
  {
    path: 'add-recipe',
    component: AddRecipeComponent,
    data: { title: 'Добавить рецепт' }
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    data: { title: 'Рецепты' }
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    data: { title: 'Категории' }
  },
  {
    path: 'support-contact',
    component: SupportContactComponent,
    data: { title: 'Поддержка' }
  },
  {
    path: '',
    redirectTo: '/add-recipe',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/not-found404',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AddRecipeComponent,
    RecipesComponent,
    CategoriesComponent,
    SupportContactComponent,
    NotFound404Component
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
export class AppModule {
}
