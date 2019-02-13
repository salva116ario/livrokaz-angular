
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
// NON FONCTIONNEL à travailler

 /* onSubmit() {
if(this.bookId == null) {
  this.bookService.availableBooks$.push(this.bookEdited);
}
  }
  */
 }

/*
import { Component, OnInit } from '@angular/core';
import { BookService} from '../../service/book.service';
import {Book} from '../../model/book.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {


  bookEdited: Book;
  bookId: number;

  bookForm = this.fb.group({
    id: [{value: '', disabled: true}],
    auteur: [''],
    couverture: [''],
    editeur: [''],
    isbn: [''],
    langue: [''],
    prix: [{value: '', disabled: true}],
    dateSortie: [{value: '', disabled: true}],
    stock: [{value: '', disabled: true}],
    synopsys: [''],
    titre: [''],
    topic: [''],
    stId: [{value: '', disabled: true}]
  });

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.bookId = +this.route.snapshot.params.id;
    this.bookService.findBook(this.bookId).subscribe(book => {
      this.bookEdited = book;
      console.log(book);
      if (this.bookEdited != null) {
        this.bookForm.patchValue({
          boId: this.bookEdited.boId,
          boAuthor: this.bookEdited.boAuthor,
          boCover: this.bookEdited.boCover,
          boEditor: this.bookEdited.boEditor,
          boIsbn: this.bookEdited.boIsbn,
          boLanguage: this.bookEdited.boLanguage,
          boPrice: this.bookEdited.boPrice,
          boReleaseDate: this.bookEdited.boReleaseDate,
          boStock: this.bookEdited.boStock,
          boSynopsys: this.bookEdited.boSynopsys,
          boTitle: this.bookEdited.boTitle,
          boTopic: this.bookEdited.boTopic,
          style: this.bookEdited.style
        });
      } else {
        this.bookEdited = {boId: 0, boAuthor: '', boCover: '', boEditor: '', boIsbn: '', boLanguage: '', boPrice: 0, boReleaseDate: new Date(), boStock: 0, boSynopsys: '', boTitle: '', boTopic: '', style: null, commandLines: []};
      }
    });
  }

}
*/
