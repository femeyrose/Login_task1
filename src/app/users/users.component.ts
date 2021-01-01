import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  todos=[];
  constructor(private dataService: DataService,private router:Router) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(){
    this.todos= this.dataService.details
    console.log(this.todos)
    return this.todos
   }


}
