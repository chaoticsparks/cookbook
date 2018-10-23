import { NgModule } from '@angular/core';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CategoriesComponent } from './categories/categories.component';
import { SupportContactComponent } from './support-contact/support-contact.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'page-not-found',
    component: NotFound404Component,
    data: { title: 'Страница не найдена!' }
  },
  {
    path: '',
    redirectTo: '/add-recipe',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
