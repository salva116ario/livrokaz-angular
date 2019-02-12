import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
 
@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  isAdmin: boolean;

  constructor(private router: Router) {
    this.isAdmin = false;
  }

  ngOnInit() {}

  adminDisConnect() {
    console.log("Deconnection");
    this.isAdmin = false;
    this.router.navigate(['']);
  }
  adminConnect() {
    console.log("Connection");
    this.isAdmin = true;
    this.router.navigate(['login-admin'])
  }
}
