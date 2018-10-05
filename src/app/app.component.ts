import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Topic-App';
  menus = [
    { uri: '/users', item: 'Home', active: true },
    { uri: '/topics', item: 'Topic', active: false},
    {uri: '/users', item: 'Users', active: false}
  ];

}
