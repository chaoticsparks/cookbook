import { Injectable } from '@angular/core';
import {IDataToRegister} from './i-data-to-register';
import UserCredential = firebase.auth.UserCredential;
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  isAuthenticated$ = this.afAuth.user;

  signUp(dataToRegister: IDataToRegister): Promise<void> {
    return this.afAuth.auth.createUserWithEmailAndPassword(dataToRegister.email, dataToRegister.password)
      .then((credentials: UserCredential) => {
        if (dataToRegister.name) {
          return credentials.user.updateProfile({
            displayName: dataToRegister.name,
            photoURL: null
          });
        }
      });
  }

  logOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}
