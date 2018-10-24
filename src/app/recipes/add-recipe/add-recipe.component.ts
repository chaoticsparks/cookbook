import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

export interface Cats {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent {

  // @ViewChild('recipeLink') recipeLinkElement: ElementRef;

  cats: Cats[] = [
    {value: 'steak-1', viewValue: 'Завтраки'},
    {value: 'steak-2', viewValue: 'Первые блюда'},
    {value: 'pizza-1', viewValue: 'Вторые блюда'},
    {value: 'tacos-2', viewValue: 'Выпечка'},
    {value: 'tacos-4', viewValue: 'Десерты'},
  ];

  constructor() { }

  /*ngAfterViewInit() {
    this.recipeLinkElement.nativeElement.focus();
  }*/

}
