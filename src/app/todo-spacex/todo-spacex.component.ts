import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-spacex',
  templateUrl: './todo-spacex.component.html',
  styleUrls: ['./todo-spacex.component.css']
})
export class TodoSpacexComponent implements OnInit {

  data:any;
  link = 'https://api.spacexdata.com/v3/missions';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.link).subscribe((responseData:any)=> {
      this.data = responseData;
    })
  }



}
