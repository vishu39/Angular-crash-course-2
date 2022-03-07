import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonplaceholderService {
  data: BehaviorSubject<any> = new BehaviorSubject([]);
  url = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private _http: HttpClient) {}
  getDatas() {
    this._http.get(this.url).subscribe((data) => {
      this.data.next(data);
    });
  }
}
