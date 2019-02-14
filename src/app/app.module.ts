import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './view/footer/footer.component';
import { HeaderComponent } from './view/header/header.component';
import { BookDetailComponent } from './view/book-detail/book-detail.component';
import { FormsModule } from '@angular/forms';
import {BookListComponent} from './view/book-list/book-list.component';


  import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatGridListModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { UserCardComponent } from "./view/user-card/user-card.component";
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomeComponent } from "./view/home/home.component";
import { LoginAdminComponent } from "./view/login-admin/login-admin.component";
import { LoginComponent } from "./view/login/login.component";
import { SignInComponent } from "./view/sign-in/sign-in.component";
import { MatVideoModule } from "mat-video";
import { SearchBarComponent } from './view/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    FooterComponent,
    HeaderComponent,
    BookDetailComponent,
    HomeComponent,
    SignInComponent,
    LoginAdminComponent,
    LoginComponent,
    SignInComponent,
    SearchBarComponent,
    NotFoundComponent,
    UserCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatSidenavModule,
    MatCardModule,
    MatVideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
