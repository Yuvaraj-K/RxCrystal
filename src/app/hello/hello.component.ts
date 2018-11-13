import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../app.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
    
  message$: Observable<string>;

  constructor(public store: Store<AppState>) {
    this.message$ = this.store.select('message');
  }

  ngOnInit() {
  }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' })
  }

  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' })
  }

}
