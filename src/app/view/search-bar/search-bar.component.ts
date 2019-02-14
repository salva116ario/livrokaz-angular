import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BookService } from "../../service/book.service";
import { BookListComponent } from "../book-list/book-list.component";
import { Book } from "../../model/book.model";
import { Observable, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  requestform: {} = {
    search: "",
    selectType: ""
  };
  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {}
  refreshSearchBar() {
    this.requestform = {
      search: " ",
      selectType: "titre"
    };
  }

  reqSearch(value) {
    console.log("etape1", value.search, value.selectType);
    const test = this.bookService.publishBookBy(value.search, value.selectType);
    this.router.navigate(['book-list']);
    this.refreshSearchBar();
  }
}
