import { Component } from '@angular/core';

import { Post } from './models/post.model';

export interface AppState {
  message: string,
  post : Post
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title= 'Welcome to State Management'

  constructor() {
  }

}
