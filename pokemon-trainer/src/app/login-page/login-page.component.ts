import { 
  Component, 
  OnInit,
  ViewEncapsulation  } from '@angular/core';
import { User } from './models/user';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

  user:User = new User(null, '', '');

  userForm = new FormGroup({
     name: new FormControl(this.user.name, [
      Validators.required, 
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z]*')
    ]),
    email: new FormControl(this.user.email, [
      Validators.required, 
      Validators.email
    ])
  });

  constructor(private router: Router) {}
 
  onSubmit() {
    const userformNameInput = this.userForm.get('name')!.value
    localStorage.setItem('user', userformNameInput);
    this.router.navigate(['catalogue'])
  }

  getNameErrorMessage() {
    if (this.userForm.get('name')!.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.userForm.get('name')!.hasError('pattern')) {
      return 'Name can\'t contain special characters';
    }
    if(this.userForm.get('name')!.hasError('minlength')) {
      return 'Name requires at least 2 characters';
    }
    return '';
  }
  getEmailErrorMessage() {
    if (this.userForm.get('email')!.hasError('required')) {
      return 'You must enter a value';
    }
    return this.userForm.get('email')!.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
  }
  get name() {
    return this.userForm.get('name');
  }
  get email() {
    return this.userForm.get('email');
  }

}
