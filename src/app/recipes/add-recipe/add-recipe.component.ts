import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInput } from '@angular/material';

export interface Cats {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  addRecipeForm: FormGroup = this.fb.group({
    url: [null, Validators.required],
    category: [null, Validators.required],
    diet: ['2', Validators.required],
    ingredients: [null],
    notes: [null],
    favorite: [false],
  });

  cats: Cats[] = [
    {value: 'steak-1', viewValue: 'Завтраки'},
    {value: 'steak-2', viewValue: 'Первые блюда'},
    {value: 'pizza-1', viewValue: 'Вторые блюда'},
    {value: 'tacos-2', viewValue: 'Выпечка'},
    {value: 'tacos-4', viewValue: 'Десерты'},
  ];

  @ViewChild('recipeUrl', {read: MatInput}) recipeUrl: MatInput;

  onSubmit() {
    this.addRecipeForm.disable();
    console.warn(this.addRecipeForm.value);
  }

  ngOnInit(): void { // TODO: BUG: Should be on ngAfterViewInit() but raises error: "ExpressionChangedAfterItHasBeenCheckedError"
    this.recipeUrl.focus();
  }

}
