import { Observable } from 'rxjs/Observable';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.users$ = this.service.getUsers();
  }

}
