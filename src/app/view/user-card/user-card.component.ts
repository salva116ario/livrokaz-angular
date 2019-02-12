import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  user: object;
  booklist: Array<{name: string}>;

  constructor() {
    this.user = {
    name: 'toto',
    role: 'client',
  };
  this.booklist = [
   { name: 'les miserables'},
   {name: 'l\'informatique pour les nuls'}
  ]
  }

  ngOnInit() {
  }

}
