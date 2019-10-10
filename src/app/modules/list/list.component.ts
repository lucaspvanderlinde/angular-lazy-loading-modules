import { Users } from './../../shared/models/users';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public users: Users[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.apiService.getUsers()
    .subscribe(
      (data) => {
        this.users = data.data;
      });
  }
}
