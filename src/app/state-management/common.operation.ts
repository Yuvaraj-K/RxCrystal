
import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


interface AppState {
    message: string,
    post : Post
  }
  
  export class AppComponent {
    message$: Observable<string>; // hello world
  
    post : Observable<Post>;  // text change
    text: string;
  
    constructor(public store: Store<AppState>) {
      this.message$ = this.store.select('message');
      this.post = this.store.select('post');
    }
  
    spanishMessage() {
      this.store.dispatch({ type: 'SPANISH' })
    }
  
    frenchMessage() {
      this.store.dispatch({ type: 'FRENCH' })
    }
    
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