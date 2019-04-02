import { Injectable } from '@angular/core';
import {IDataToRegister} from './i-data-to-register';
import UserCredential = firebase.auth.UserCredential;
import {AngularFireAuth} from '@angular/fire/auth';
import {IDataToLogin} from './i-data-to-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  isAuthenticated$ = this.afAuth.user;

  register(dataToRegister: IDataToRegister): Promise<void> {
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

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  login(dataToLogin: IDataToLogin): Promise<UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(dataToLogin.email, dataToLogin.password);
  }
}
