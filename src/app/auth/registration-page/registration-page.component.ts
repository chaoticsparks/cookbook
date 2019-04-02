import { Component, OnInit } from '@angular/core';
import {IDataToRegister} from '../i-data-to-register';
import {AuthService} from '../auth.service';
import {FirebaseError} from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  error = '';
  isLoading = false;
  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  register(dataToRegister: IDataToRegister) {
    this.isLoading = true;
    this.auth.register(dataToRegister)
      .then(() => {
        this.router.navigate(['']);
        this.isLoading = false;
      })
      .catch((e: FirebaseError) => {
        this.isLoading = false;
        switch (e.code) {
          case 'auth/email-already-in-use':
            this.error = 'Пользователь с данным Email уже существует.';
            break;
          case 'auth/invalid-email':
            this.error = 'Введенный Email не корректен';
            break;
          case 'auth/weak-password':
            this.error = 'Введенный пароль слишком простой.';
            break;
        }
      });
  }
}
