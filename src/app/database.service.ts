import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {IIngredientsFetched} from './recipes/i-ingredients-fetched';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private afs: AngularFirestore) { }

  createUser(id: string): Observable<any> { // TODO: Add type there
    return this.afs
      .collection<IIngredientsFetched>('ingredients', ref => ref.where('global', '==', true))
      .valueChanges()
      .pipe(
        switchMap((ingredients) => {
          return this.afs.collection('users').doc(id).set({
            ingredients: ingredients[0].list
          });
        })
      );
  }
}
