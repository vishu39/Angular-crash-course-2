import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  title = 'All Binding';
  name = 'vishu';
  myId = 'vishu1234';
  hasError = true;
  constructor() {}
  successClass = 'text-special';

  ngOnInit(): void {}
}
