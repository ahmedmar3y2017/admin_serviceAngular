import { Injectable } from '@angular/core';


@Injectable()
export class UserService{
 IsloggedIn :boolean;

constructor() {
  this.IsloggedIn = false;
  }

  SetUserLoggedIn(){


    this.IsloggedIn = true;

}


getUserLogggedIn(){

  return this.IsloggedIn;
}
}
