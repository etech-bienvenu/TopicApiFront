import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopicMenuComponent } from './topic-menu/topic-menu.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersTopicComponent } from './users-topic/users-topic.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import { ListUserComponent } from './list-user/list-user.component';
const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'topics', component: UsersTopicComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopicMenuComponent,
    UsersComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UsersTopicComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing : true, onSameUrlNavigation: 'reload'},
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
