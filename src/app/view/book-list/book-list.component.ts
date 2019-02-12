import {Component, OnInit, ViewChild} from '@angular/core';
import { BookService} from '../../service/book.service';
import {MatPaginator, MatSort} from '@angular/material';
import {BookListDataSource} from './book-list-datasource';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {



  dataSource: BookListDataSource;
  displayedColumns = ['id', 'cover', 'title', 'author', 'editor', 'style', 'isbn', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    this.dataSource = new BookListDataSource(this.paginator, this.sort, this.bookService);
  }



}
