import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
