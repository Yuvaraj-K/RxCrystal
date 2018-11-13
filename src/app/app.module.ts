import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';
import { helloReducer } from "./reducers/hello.reducer";
import { postReducer } from './reducers/post.reducer';
import { AppRoutingModule } from './app-routing.module';
import { StateManagementModule } from './state-management/state-management.module';
import { HelloComponent } from './hello/hello.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      message: helloReducer,
      post: postReducer
    }),
    AppRoutingModule,
    StateManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
