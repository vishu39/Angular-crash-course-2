import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  value: string = 'vishu';
  title = 'pipes all examples';
  person = {
    name: 'Vishu',
    age: 22,
  };
  date = new Date();
  constructor() {}

  ngOnInit(): void {}
}
