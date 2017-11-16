import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { UsersProxyService } from './users-proxy.service';
import { Injectable } from '@angular/core';
import { User } from './user';

export class UsersService {

  constructor(private proxy: UsersProxyService) { }

  getUsers(): Observable<User[]> {
    return this.proxy.getUsersFromServer()
    .pipe(
      map(response => response.body),
      map(body => {
        let users: User[] = [];
        body.forEach(element => {
          const user: User = {
            id: element.id,
            name: element.name,
            username: element.username,
            email: element.email
          };
          users = [...users, user];
        });
        return users;
      })
    );
  }

}
