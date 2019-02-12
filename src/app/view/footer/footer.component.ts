import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  isAdmin: boolean;

  constructor() {
    this.isAdmin = false;
  }

  ngOnInit() {}

  adminDisConnect(){
    console.log('Connection');
  }
}
