import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './view/book-list/book-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './view/home/home.component';
import { LoginAdminComponent } from './view/login-admin/login-admin.component';
import { LoginComponent } from './view/login/login.component';
import { SignInComponent } from './view/sign-in/sign-in.component';
import {BookDetailComponent} from './view/book-detail/book-detail.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: "book-list", component: BookListComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-admin', component: LoginAdminComponent},
  { path: "notfound", component: NotFoundComponent },
  { path: "**", redirectTo: "/notfound" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
