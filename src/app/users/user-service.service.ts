import { Injectable } from '@angular/core';
import { IUser } from './i-user';
import { resolve } from 'url';
import { reject } from 'q';
import { Http,Headers} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private users: Array<IUser>;
  private baseUrl: any = 'http://localhost:3000';

  constructor(private http: Http) {
  }
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`, { headers: this.getHeaders()});
  }
  saveUser(user: IUser): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user, { headers: this.getHeaders() });
  }

  removeUser(user: IUser): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${user.id}`);
  }

  updateUser(userId: number, userUpdate: IUser) {
    let userFinded = this.users.find(user => user.id === userId);
    this.users.splice(this.users.indexOf(userFinded), 1);
    userFinded = userUpdate;
    userFinded.id = userId;
    this.users.push(userFinded);
  }

  private getHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
