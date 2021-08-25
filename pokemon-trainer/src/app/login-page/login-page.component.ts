import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {



  model:User = new User(null, '');

  constructor(
    private router: Router,
  ) {}

  onSubmit() {
    localStorage.setItem('user', this.model.name);
    this.router.navigate(['catalogue'])
  }
  
  

  ngOnInit(): void {
  }

}
