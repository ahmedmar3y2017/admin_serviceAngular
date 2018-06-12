import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { promise } from 'protractor';

@Injectable()
export class AuthGuard implements CanActivate {

state:boolean = false ;

  constructor (private authService:UserService ,private router :Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    console.log(this.authService.getUserLogggedIn());

    // debugger;
    this.state= this.authService.getUserLogggedIn();
    if (this.state) {

      return  true;
    } else {

        this.router.navigate(['authentication/login']);


    }


  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
  //   return this.authService.AuthLogin().then(
  //       (auth:boolean) => {
  //         if(auth){

  //           return true;
  //         }
  //         else{

  //           this.router.navigate(['authentication/login'])
  //         }
  //       }
  //     );
  // }

}
}
