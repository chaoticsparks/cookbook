import {Component, OnDestroy, OnInit} from '@angular/core';
import {IDataToRegister} from '../i-data-to-register';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {DatabaseService} from '../../database.service';
import {switchMap, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit, OnDestroy {

  error = '';
  isLoading = false;
  private unsubscribe: Subject<void> = new Subject();

  constructor(private auth: AuthService,
              private router: Router,
              private db: DatabaseService) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  register(dataToRegister: IDataToRegister) {
    this.isLoading = true;
    this.auth.register(dataToRegister)
      .pipe(
        takeUntil(this.unsubscribe),
        switchMap(credential => this.db.createUser(credential.user.uid))
      )
      .subscribe(() => {
        this.router.navigate(['']);
        this.isLoading = false;
      },
        (e) => {
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
