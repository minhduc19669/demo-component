import { Component, OnInit } from '@angular/core';
import {IUser} from '../iuser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
