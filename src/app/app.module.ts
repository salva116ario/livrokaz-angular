import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './view/footer/footer.component';
import { HeaderComponent } from './view/header/header.component';
import { BookDetailComponent } from './view/book-detail/book-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { IconSvgComponent } from './view/icon-svg/icon-svg.component';
import { FormsModule } from '@angular/forms';
import {BookListComponent} from './view/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    FooterComponent,
    HeaderComponent,
    BookDetailComponent,
    IconSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
