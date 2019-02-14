import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book.model';
import {ActivatedRoute, Router} from '@angular/router';
import {StyleService} from '../../service/style.service';
import {Style} from '../../model/style.model';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {


  bookEdited: Book;
  bookId: number;
  availableStyles: BehaviorSubject<Style[]> = new BehaviorSubject<Style[]>([]);
  newBook = false;

  constructor(private bookService: BookService,
              private styleService: StyleService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.availableStyles = this.styleService.availableStyles$;
    this.bookId = +this.route.snapshot.params.id;
    if (this.bookId === 0) {
      this.newBook = true;
    }
    this.bookService.findBook(this.bookId).subscribe(book => {
      this.bookEdited = book;
      });
    }

  onSubmit() {
    if (!this.newBook) {
      this.bookService.updateBook(this.bookEdited);
    } else {
      this.bookService.createBook(this.bookEdited);
    }
  }
}
