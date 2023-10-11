import { Component, OnInit } from '@angular/core';
import { IndexeddbService } from '../indexeddb.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  firstname: string = ''
  showButtons = 1
  constructor(private loggedUser: IndexeddbService) { }
  // ngOnInit(): void {
  userid = this.loggedUser.getUserName()
  // console.log(userid[1])


  // const matchedUser = this.arr.find(user => user.userid === userid.userId)
  // this.firstname = matchedUser.fName
  // }

}
