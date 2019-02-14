import { Component, OnInit } from '@angular/core';
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
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  requestform: {} = {
    search: "",
    selectType: ""
  };
  constructor() { }

  ngOnInit() {
  }

}
