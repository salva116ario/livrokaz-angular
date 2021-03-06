import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  signIn() {
    console.log("signIn");
    this.router.navigate(["signin"]);
  }
  loginIn() {
    console.log("loginIn");
    this.router.navigate(['login']);
  }
}
