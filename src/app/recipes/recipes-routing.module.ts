import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import {AuthGuard} from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'add-recipe',
    component: AddRecipeComponent,
    canActivate: [AuthGuard],
    data: { title: 'Добавить рецепт' }
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    data: { title: 'Рецепты' },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
