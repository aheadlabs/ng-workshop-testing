import { HttpResponse } from '@angular/common/http/src/response';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersProxyService {

  constructor(private httpClient: HttpClient) { }

  getUsersFromServer(): Observable<HttpResponse<any>> {
    return this.httpClient.get('http://localhost:3001/api/public/users', {observe: 'response'});
  }

}
