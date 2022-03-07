import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  datas: any;
  constructor(private jpService: JsonplaceholderService) {}
  ngOnInit(): void {
    this.jpService.getDatas();
    this.fetch();
  }
  fetch() {
    this.jpService.data.forEach((data) => {
      this.datas = data;
    });
  }
}
