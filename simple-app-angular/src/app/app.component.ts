import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'simple-app-angular';
  usersDataUrl = 'http://localhost:8080/demo/all';
  data = {};

  ngOnInit() {
    this.getUsers().subscribe(
      (data) => {
        console.log(data);
        this.data = data;
      }
    );
  }

  getUsers() {
    return this.http.get(this.usersDataUrl);
  }
}
