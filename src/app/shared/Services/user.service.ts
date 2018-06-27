import { Injectable } from '@angular/core';

import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Admin } from '../Entities/admin';
@Injectable()
export class UserService {
  IsloggedIn: boolean;
  private _baseUrl = 'http://localhost:8080/rest';

  constructor(private _http: Http) {
    this.IsloggedIn = true;
  }

  SetUserLoggedIn() {


    this.IsloggedIn = true;

  }

  // login function 
  checkAdmin(email: string, pass: string) {

    let username: string = 'admin';
    let password: string = 'admin';
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    headers.append("Content-Type", "application/json; charset=utf8");

    let cpParams = new URLSearchParams();
    cpParams.set('email', email);
    cpParams.set('password', pass);

    const options = new RequestOptions({ headers: headers, params: cpParams });
    return this._http.get(this._baseUrl + "/admin/login", options)
      .map((response: Response) => response.json()).do(data => console.log(JSON.stringify(data)));



  }



  getUserLogggedIn() {

    return this.IsloggedIn;
  }
}
