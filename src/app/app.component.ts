import { Component, OnInit } from '@angular/core';
import { BookService } from './service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'livrokaz';
  constructor(private bookService: BookService) {}
  ngOnInit() {
    this.bookService.publishBooks();
  }
}
