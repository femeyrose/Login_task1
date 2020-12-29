import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  details = {
    "a@gmail.com":{ name: "user1",num:1001, email: "a@gmail.com", password: 1234 },
    "b@gmail.com":{ name: "user2",num:1002, email: "b@gmail.com", password: 1235 },
    "c@gmail.com":{ name: "user3",num:1003, email: "c@gmail.com", password: 1236 },
    "d@gmail.com":{ name: "user4",num:1004, email: "d@gmail.com", password: 1237 },
    "e@gmail.com":{ name: "user5",num:1005, email: "e@gmail.com", password: 1238 },

  }

  name = ""
  num = ""
  email = ""
  pwd = ""

  signForm = this.fb.group({
    name: ['', [Validators.required]],
    num: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required]],
    pwd: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }

  getError(field){
    return(this.signForm.get(field).touched||this.signForm.get(field).dirty)&& this.signForm.get(field).errors;
  
  }

  sign(){
    
    let data = this.details;
    var email = this.signForm.value.email
      if (email in this.details) {
        alert("Account already exists. Please login")
        this.router.navigateByUrl("");
      }
      else {
       alert("Registered Successfully")
      }
  
      }
  }
  



