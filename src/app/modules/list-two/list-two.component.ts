import { Users } from './../../shared/models/users';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-list-two',
  templateUrl: './list-two.component.html',
  styleUrls: ['./list-two.component.scss']
})
export class ListTwoComponent implements OnInit {

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
