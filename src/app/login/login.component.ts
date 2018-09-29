import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  login = { "name": " ", "password": "" };
  credentials = { "name": 'Harry', "password": 'harry123' };
  submitted = false;
  onSubmit() {
    if (this.login.name === this.credentials.name && this.login.password === this.credentials.password) {
      alert('Login Successful');
      this.submitted = true;
    }
    else {
      alert('Login Failed, Please try again ');
    }
  }

  ngOnInit() {
  }

}