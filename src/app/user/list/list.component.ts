import { Component, OnInit } from '@angular/core';
import { IUser } from '../iuser';

@Component({
  selector: 'app-list-user',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listuser = 'List User';
  users: IUser[] = [
    {
      id: 1,
      name: 'luong',
      email: 'luong@gmail.com',
      address: 'HN',
    },
    {
      id: 2,
      name: 'minh',
      email: 'minh@gmail.com',
      address: 'HN',
    },
    {
      id: 3,
      name: 'duc',
      email: 'duc@gmail.com',
      address: 'HN',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.user_search = this.users;
  }

  user_search = [];

  search(event: any) {
    let key = event.target.value;
    this.user_search = key ? this.userfilter(key) : this.users;
  }

  userfilter(keyword: string) {
    return this.users.filter(function (user) {
      return user.name.indexOf(keyword) != -1;
    });
  }
}
