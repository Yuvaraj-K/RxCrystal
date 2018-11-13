import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../models/post.model';
import * as PostActions from '../actions/post.actions';

import { Store } from '@ngrx/store';
import { AppState } from '../app.component';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  post : Observable<Post>;  // text change
  text: string;
 
  constructor(public store: Store<AppState>) {
    this.post = this.store.select('post');
  }

  ngOnInit() {}
  

  EditText(){
    this.store.dispatch(new PostActions.EditText(this.text))
  }
  Upvote(){
    this.store.dispatch(new PostActions.Upvote())
  }
  Downvote(){
    this.store.dispatch(new PostActions.Downvote())
  }
  Reset(){
    this.store.dispatch(new PostActions.Reset())
  }

}
