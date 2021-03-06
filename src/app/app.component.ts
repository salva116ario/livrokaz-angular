import {Component, OnInit} from '@angular/core';
import {BookService} from './service/book.service';
import {StyleService} from './service/style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'livrokaz';

  constructor(private bookService: BookService,
              private styleService: StyleService) {
  }

  ngOnInit() {
    this.bookService.publishBooks();
    this.styleService.publishStyles();
  }
}
