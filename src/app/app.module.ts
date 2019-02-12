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
  MatButtonModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule,
  MatSortModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatRadioModule, MatSortHeaderIntl
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    FooterComponent,
    HeaderComponent,
    BookDetailComponent,

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
    BrowserAnimationsModule,
    FormsModule,
     MatToolbarModule,
     MatButtonModule,
     MatListModule,
     MatInputModule,
     MatSelectModule,
     MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
