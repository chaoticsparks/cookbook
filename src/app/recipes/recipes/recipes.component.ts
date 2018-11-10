import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  public recipes: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.recipes = db.collection('recipes').valueChanges();
  }

  ngOnInit() {

  }

}
