import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { product } from '../Entities/product';
@Injectable()
export class ProductService {
  private _baseUrl = 'http://localhost:8080/rest';

  constructor(private _http: Http) { }
  // get product for Specific business 
  getProducts(businessId: number): Observable<product[]> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });

    let options = new RequestOptions({ headers: cpHeaders });
    return this._http.get(this._baseUrl + "/business/" + businessId + "/product", options)
      .map((response: Response) => <product[]>response.json()).do(data => console.log(JSON.stringify(data)));
  }


  createProduct(task: product): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this._http.post(this._baseUrl+"/product", task, options)
      .map(success => success.status);
  }

  deleteProductById(productId: string): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    // let cpParams = new URLSearchParams();
    // cpParams.set('id', productId);
    let options = new RequestOptions({ headers: cpHeaders });
    return this._http.delete(this._baseUrl + "/product/" + productId, options)
      .map(success => success.status);
  }

  updateProduct(product: product): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this._http.put(this._baseUrl, product, options)
      .map(success => success.status);
  }
}
