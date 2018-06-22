import { Http, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';


@Injectable()
export class CountryService {

  private Country_Api_Url = 'https://restcountries.eu/rest/v2/all';



  constructor(private http: Http) {

  }

  getData() {
    return this.http.get(this.Country_Api_Url)
      .map(response => response.json())


  }

  // getCity(country) {

  //   let username: string = 'admin';
  //   let password: string = 'admin';
  //   let headers: Headers = new Headers();
  //   headers.append("Authorization", "Basic " + btoa(username + ":" + password));
  //   headers.append("Content-Type", "application/json; charset=utf8");

  //   const options = new RequestOptions({ headers: headers });

  //   return this.http.get('https://andruxnet-world-cities-v1.p.mashape.com/?query=' + country + '&searchby=country', options)
  //     .map(response => response.json());

  // }

}
