import { Component, OnInit } from '@angular/core';
import { BookService} from '../../service/book.service';
import {Book} from '../../model/book.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {


  bookEdited: Book;
  bookId: number;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  this.bookId = +this.route.snapshot.params.id;
  this.bookService.findBook(this.bookId).subscribe(book => {
    this.bookEdited = book;
    console.log(book);
  });
  }

}
