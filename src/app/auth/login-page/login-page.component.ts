import { Component, OnInit } from '@angular/core';
import {IDataToLogin} from '../i-data-to-login';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {FirebaseError} from 'firebase';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  isLoading = false;
  error = '';

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login(dataToLogin: IDataToLogin) {
    this.isLoading = true;
    this.auth.login(dataToLogin)
      .then(() => {
        this.router.navigate(['']);
        this.isLoading = false;
      })
      .catch((error: FirebaseError) => {
        this.isLoading = false;
        switch (error.code) {
          case 'auth/invalid-email':
            this.error = 'Введенный Email не корректен';
            break;
          case 'auth/wrong-password':
            this.error = 'Неверный пароль';
            break;
          case 'auth/user-disabled':
            this.error = 'Данный пользователь заблокирован';
            break;
          case 'auth/user-not-found':
            this.error = 'Пользователя с данным Email не найдено';
            break;
        }
      });
  }
}
