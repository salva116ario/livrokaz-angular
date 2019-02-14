import {Component, OnInit, ViewChild} from '@angular/core';
import {BookService} from '../../service/book.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BookListDataSource} from './book-list-datasource';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Book} from '../../model/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ],
})
export class BookListComponent implements OnInit {
  dataSource: BookListDataSource;
  displayedColumns = ['id', 'cover', 'title', 'author', 'editor', 'style', 'price', 'stock', 'action'];
  expandedElement: Book | null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.dataSource = new BookListDataSource(this.paginator, this.sort, this.bookService);
  }
}



