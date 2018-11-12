import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.categories$ = db.collection('categories').valueChanges();
  }

  ngOnInit() {
  }

}
