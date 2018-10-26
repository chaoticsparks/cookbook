import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent, MatInput } from '@angular/material';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, startWith } from 'rxjs/operators';

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
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
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


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  onSubmit() {
    this.addRecipeForm.disable();
    console.warn(this.addRecipeForm.value);
  }

  ngOnInit(): void { // TODO: BUG: Should be on ngAfterViewInit() but raises error: "ExpressionChangedAfterItHasBeenCheckedError"
    this.recipeUrl.focus();
  }

}
