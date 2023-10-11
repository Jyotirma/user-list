import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexeddbService {

  loggedInUser: any[] = [];

  setUserName(user: any, userType: any): void {
    this.loggedInUser[0] = user;
    this.loggedInUser[1] = userType;
  }

  getUserName() {
    return this.loggedInUser;
  }
}
