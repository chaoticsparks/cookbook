import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AppMaterialModule } from '../app-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    RecipesRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddRecipeComponent,
    RecipesComponent,
  ]
})
export class RecipesModule { }
