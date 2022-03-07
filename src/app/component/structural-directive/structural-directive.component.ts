import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css'],
})
export class StructuralDirectiveComponent implements OnInit {
  datas = [
    {
      name: 'Vishu',
      age: 22,
    },
    {
      name: 'karan',
      age: 20,
    },
    {
      name: 'vishwash',
      age: 34,
    },
    {
      name: 'sagar',
      age: 25,
    },
  ];

  case: string = 'two';
  constructor() {}

  ngOnInit(): void {}
}
