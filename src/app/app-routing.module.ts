import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './view/book-list/book-list.component';
import {BookDetailComponent} from './view/book-detail/book-detail.component';

const routes: Routes = [
  {path: 'book-list', component: BookListComponent},
  {path: 'book-detail/:id', component: BookDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
