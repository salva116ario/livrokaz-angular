import { Component, OnInit } from '@angular/core';
import { BookService} from '../../service/book.service';
import {Book} from '../../model/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {


  bookEdited: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {

  }

}
