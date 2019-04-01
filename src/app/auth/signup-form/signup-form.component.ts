import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {IDataToRegister} from '../i-data-to-register';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  @Output() signUp = new EventEmitter<IDataToRegister>();

  hide = true;

  signUpForm = this.fb.group({
    name: ['', [
      Validators.maxLength(15)
    ]],
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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  toSignUp() {
    this.signUp.emit(this.signUpForm.value);
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

}