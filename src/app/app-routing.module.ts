import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'title', component: TitleComponent },
  { path: 'hello', component: HelloComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
