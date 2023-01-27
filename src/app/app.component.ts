import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  jobTitle = '';
  location = '';

  constructor(private http: HttpClient) {}

  search() {
    const httpOptions = {
      params: {
        jobTitle: this.jobTitle,
        location: this.location,
      },
    };
    this.http
      .get(
        'https://2yu0xpu560.execute-api.us-east-1.amazonaws.com/dev/board/jobs',
        httpOptions
      )
      .subscribe((res) => {
        console.log('res', res);
      });
  }
}
