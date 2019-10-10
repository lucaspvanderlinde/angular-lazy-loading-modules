import { Component, OnInit } from '@angular/core';

import { UsersTwo } from 'src/app/shared/models/usersTwo';
import { ApiTwoService } from './../../core/services/api-two.service';

@Component({
  selector: 'app-list-tree',
  templateUrl: './list-tree.component.html',
  styleUrls: ['./list-tree.component.scss']
})
export class ListTreeComponent implements OnInit {

  usersTwo: UsersTwo[];

  constructor(private apiTwoService: ApiTwoService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.apiTwoService.getUsers().subscribe((data: UsersTwo[]) => {
      this.usersTwo = data;
    });
  }
}
