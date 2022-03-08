import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  user = {
    name: 'vishu',
    age: 22,
    id: 1,
  };
  constructor() {}

  ngOnInit(): void {}
  userData(event) {
    console.log(event);
  }
}
