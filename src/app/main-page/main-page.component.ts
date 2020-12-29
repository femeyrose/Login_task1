import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  email=""
  pwd=""

  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    pwd: ['', [Validators.required]],

  });

  constructor(private fb: FormBuilder,
    private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
  }

  getError(field) {
    return (this.loginForm.get(field).touched || this.loginForm.get(field).dirty) && this.loginForm.get(field).errors;
  }

  
  login() { 
    let data = this.dataService.details;
    if (this.loginForm.value.email in data && this.loginForm.value.pwd in data)
        {
          alert("successfull login")
                  }
        else {
          alert("incorrect login or form is invalid")
        }

}
  }



