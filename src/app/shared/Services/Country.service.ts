import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';


@Injectable()
export class CountryService {

  private Country_Api_Url = 'https://restcountries.eu/rest/v2/all';



  constructor (private http:Http){

  }

  getData(){
    return this.http.get(this.Country_Api_Url)
    .map(response => response.json())


  }

  getCity(city){
    return this.http.get('https://andruxnet-world-cities-v1.p.mashape.com/?query='+city+'&searchby=country')
    .map(response => response.json())

  }

}
