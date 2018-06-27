
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    let username: string = 'admin';
    let password: string = 'admin';
    formdata.append('file', file);

    let headers = new HttpHeaders(
      {
        'Authorization': "Basic " + btoa(username + ":" + password)
      }
    );
    const req = new HttpRequest('POST', 'http://localhost:8080/post', formdata, {
      reportProgress: true,
      responseType: 'text',
      headers: headers
    });

    return this.http.request(req);
  }

  getFiles(): Observable<string[]> {
    return this.http.get('/getallfiles');
  }
}