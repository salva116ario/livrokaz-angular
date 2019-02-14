import { Component, OnInit } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BookService } from "../../service/book.service";
import { BookListComponent } from "../book-list/book-list.component";
import { Book } from "../../model/book.model";
import { Observable, BehaviorSubject } from "rxjs";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  NgModel
} from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  availableBooks: Observable<Book[]>;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.availableBooks = this.bookService.availableBooks$;
  }
}
