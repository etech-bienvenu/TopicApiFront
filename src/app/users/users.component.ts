import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { IUser } from './i-user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: Array<IUser>;
  user: IUser = { id: 0, nom: '', prenom: '', pseudo: '', dateNaissance: '', photo: '' };
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getUsers().
      subscribe(res => this.users = res.json() as IUser[]);
  }
  removeUser(user: IUser) {
    // this.userService.removeUser(user).subscribe(res => console.log(res));
    // window.location.reload();
    console.log(user);
  }
  editUser(user: IUser) {
    console.log(user);
  }
  addUser(user: IUser) {
    console.log(user);
    /*this.userService.saveUser(user).subscribe(res => {
      console.log(res);
      window.location.reload();
    });*/
  }
  updateUser(user: IUser) {
    console.log(user);
  }
}
