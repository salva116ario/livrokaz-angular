import { Component, OnInit } from '@angular/core';
import { BookService} from '../../service/book.service';
import {Book} from '../../model/book.model';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  availableBooks: BehaviorSubject<Book[]>;
  dataSource;
  displayedColumns = ['id', 'title', 'author', 'editor', 'style', 'cover', 'isbn', 'action'];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.availableBooks = this.bookService.availableBooks$;
    this.dataSource = this.availableBooks;
  }

  waf() {
    console.log('waf!');
  }
}
