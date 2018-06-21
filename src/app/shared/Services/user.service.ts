import { Injectable } from '@angular/core';


@Injectable()
export class UserService{
 IsloggedIn :boolean;

constructor() {
  this.IsloggedIn = true;
  }

  SetUserLoggedIn(){


    this.IsloggedIn = true;

}


getUserLogggedIn(){

  return this.IsloggedIn;
}
}
