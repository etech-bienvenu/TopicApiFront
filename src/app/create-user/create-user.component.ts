import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../users/i-user';
import { UserServiceService } from '../users/user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  @Input() user: IUser;
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

}
