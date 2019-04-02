import { Component, OnInit } from '@angular/core';
import {IDataToLogin} from '../i-data-to-login';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login(dataToLogin: IDataToLogin) {
    this.auth.login(dataToLogin)
      .then(() => this.router.navigate(['']));
  }
}
