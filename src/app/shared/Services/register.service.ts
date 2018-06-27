import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Admin } from '../Entities/admin';
import { Business } from '../Entities/Business';


@Injectable()
export class RegisterService {
  private _baseUrl = 'http://localhost:8080/rest';





  constructor(private _http: Http) {
  }




  // save Business
  saveBusiness(business: Business): Observable<Business> {

    let username: string = 'admin';
    let password: string = 'admin';
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    headers.append("Content-Type", "application/json; charset=utf8");

    const options = new RequestOptions({ headers: headers });
    return this._http.post(this._baseUrl + "/business", business, options)
      .map((response: Response) => <Business>response.json());

  }

  // save Admin
  saveAdmins(admin: Admin, businessId: number): Observable<Admin> {
    let username: string = 'admin';
    let password: string = 'admin';
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    headers.append("Content-Type", "application/json; charset=utf8");

    const options = new RequestOptions({ headers: headers });
    return this._http.post(this._baseUrl + "/business/" + businessId + "/admin", admin, options)
      .map((response: Response) => <Admin>response.json());

  }
  // get city 
  getCity(country) {

    let username: string = 'admin';
    let password: string = 'admin';
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    headers.append("Content-Type", "application/json; charset=utf8");

    const options = new RequestOptions({ headers: headers });

    return this._http.get("http://localhost:8080/rest/business/city/?country=" + country, options)
      .map(response => response.json());

  }



  //get all admins
  getAdminsForBusiness(businessId: number): Observable<Admin[]> {
    // const cpHeaders = new Headers({ 'Content-Type': 'application/json'});
    // headers.append("Authorization", "Basic " + btoa("admin" + ":" + "admin")); 
    // headers.append("Authorization", "Basic VXNlcm5hbWU6UGFzc3dvcmQ=");
    let username: string = 'admin';
    let password: string = 'admin';
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    headers.append("Content-Type", "application/json; charset=utf8");

    const options = new RequestOptions({ headers: headers });
    return this._http.get(this._baseUrl + "/business/" + businessId + "/admin", options)
      .map((response: Response) => <Admin[]>response.json()).do(data => console.log(JSON.stringify(data)));
  }

}
