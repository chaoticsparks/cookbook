import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {IDataToLogin} from '../i-data-to-login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() isLoading = false;
  @Input() error = '';
  @Output() login = new EventEmitter<IDataToLogin>();

  hide = true;

  loginForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email,
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)
    ]]
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(private fb: FormBuilder) {
  }

  emitLogin() {
    this.login.emit(this.loginForm.value);
  }

  ngOnInit() {
  }

}
