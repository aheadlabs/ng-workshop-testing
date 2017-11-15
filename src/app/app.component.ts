import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: any[];

  constructor(private httpClient: HttpClient) {
    this.getUsers();
  }

  getUsers() {
    this.httpClient.get<any[]>('http://localhost:3001/api/public/users').subscribe(
      users => {
        console.log(users);
        this.users = users;
      }
    );
  }

}
