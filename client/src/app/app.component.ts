import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'This is a new Angular App';
  users: any;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get('http://localhost:5056/api/Users').subscribe({
      next: (response) => {
        this.users = response;
      },
      error :(err) => {
        console.log(err)
      }
    });
  }
}
