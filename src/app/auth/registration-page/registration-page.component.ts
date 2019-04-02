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

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  signUp(dataToRegister: IDataToRegister) {
    this.auth.signUp(dataToRegister)
      .then(() => {
        this.router.navigate(['']);
      })
      .catch((e: FirebaseError) => {
        console.log(e.code, e.message); // TODO: Add handling to form
      });
  }
}
