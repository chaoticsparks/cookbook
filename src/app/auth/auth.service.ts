import {Injectable} from '@angular/core';
import {IDataToRegister} from './i-data-to-register';
import UserCredential = firebase.auth.UserCredential;
import {AngularFireAuth} from '@angular/fire/auth';
import {IDataToLogin} from './i-data-to-login';
import {from, Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
  }

  isAuthenticated$ = this.afAuth.user;

  register(dataToRegister: IDataToRegister): Observable<UserCredential> {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(dataToRegister.email, dataToRegister.password))
      .pipe(
        switchMap(
          (credentials) => dataToRegister.name ?
            from(credentials.user.updateProfile({
              displayName: dataToRegister.name,
              photoURL: null
            }))
              .pipe(map(() => credentials)) : of(credentials)
        )
      );
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  login(dataToLogin: IDataToLogin): Promise<UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(dataToLogin.email, dataToLogin.password);
  }
}
