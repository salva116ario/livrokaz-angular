import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort } from '@angular/material';
import {map} from 'rxjs/operators';
import {Observable, merge, BehaviorSubject} from 'rxjs';
import {Book} from '../../model/book.model';
import {BookService} from '../../service/book.service';



/**
 * Data source for the Timetable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
  export class BookListDataSource extends DataSource<Book> {
  private dataStream: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  set data(book: Book[]) {
    this.dataStream.next(book);
  }

  get data(): Book[] {
    return this.dataStream.value;
  }

  constructor(private paginator: MatPaginator, private sort: MatSort, private bookService: BookService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Book[]> {
    this.dataStream = this.bookService.availableBooks$;
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      this.dataStream,
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.dataStream.getValue().length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Book[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Book[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'id':
          return compare(+a.boId, +b.boId, isAsc);
        case 'title':
          return compare(a.boTitle, b.boTitle, isAsc);
        case 'author':
          return compare(a.boAuthor, b.boAuthor, isAsc);
        case 'editor':
          return compare(a.boEditor, b.boEditor, isAsc);
        case 'style':
          return compare(a.style.stId, b.style.stId, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


