import { Component, OnInit, ViewChild } from '@angular/core';
import { IndexeddbService } from '../indexeddb.service';
import { NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ViewChild('registerForm', { static: false }) registerForm!: NgForm;

  showButtons = 3;

  arr: any[] = [];



  constructor() { }
  ngOnInit(): void {
    const localData = localStorage.getItem('userData')
    if (localData !== null) {
      this.arr = JSON.parse(localData)
    }
  }

  submitted = false
  onAdd(registerForm: NgForm) {
    if (registerForm.valid) {
      const userid = registerForm.value.userid;
      const password = registerForm.value.password;
      const fName = registerForm.value.fName;
      const nickName = registerForm.value.nickName;
      const lName = registerForm.value.lName;
      const userType = registerForm.value.userType;
      const active = registerForm.value.checked;
      const email = registerForm.value.email;
      const phone = registerForm.value.phone;

      const formData = {
        userid,
        password,
        fName,
        nickName,
        lName,
        userType,
        active,
        email,
        phone
      }

      this.arr.push(formData)
      localStorage.setItem('userData', JSON.stringify(this.arr));

      registerForm.resetForm()
      this.submitted = true
    }

    // this.indexedDBService.addUser(this.user).then(
    //   () => {
    //     console.log('User added successfully');
    //     this.user = {
    //       userid: userid,
    //       fName: fName,
    //       lName: lName,
    //       nickName: nickName,
    //       email: email,
    //       phone: phone,
    //       userType: userType,
    //       checked: active
    //     };
    //     console.log(this.user);

    //   },
    //   (error) => {
    //     console.error('Error adding user:', error);
    //   }
    // );


  }

}
