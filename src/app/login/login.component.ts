import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IndexeddbService } from '../indexeddb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // showButtons = 3
  ngOnInit(): void {
    const localData = localStorage.getItem('userData')
    if (localData !== null) {
      this.arr = JSON.parse(localData)
    }
  }

  arr: any[] = [];

  errorMessage: string = '';
  constructor(private loggedUser: IndexeddbService, private router: Router) { }

  onSubmit(loginForm: NgForm): void {
    const username = loginForm.value.username;
    const password = loginForm.value.password;

    const valid = this.arr.some(user => user.userid === username && user.password === password)
    if (valid) {
      const detail = this.arr.find(user => user.userid === username)
      const fullName = detail.fName;
      const type = detail.userType;
      this.loggedUser.setUserName(fullName, type)
      this.router.navigate(['/user']);
    } else if (username === 'admin' && password === 'Admin@123') {
      this.router.navigate(['/home']);
    }
    else {
      this.errorMessage = 'Invalid username or Password. Please try again.';
    }
    // if (username === 'admin' && password === 'Admin@123') {
    //   this.router.navigate(['/home']);
    // }
    // else if (username === 'user' && password === 'User@123') {
    //   this.router.navigate(['/user']);
    // }
    // else {
    //   this.errorMessage = 'Invalid username or Password. Please try again.';
    // }

  }
}
