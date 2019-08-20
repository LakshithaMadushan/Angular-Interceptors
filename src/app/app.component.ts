import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interceptors';

  constructor(private http: HttpClient) {
    this.http.get('/assets/my.json').subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
}
