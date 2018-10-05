import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../users/i-user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
})
export class ListUserComponent implements OnInit {
  @Input() users: Array<IUser>;
  constructor() { }

  ngOnInit() {
  }

}
