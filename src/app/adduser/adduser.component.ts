import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
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

  data= this.dataService.details;
  currentUser;
  constructor(private fb: FormBuilder,private router: Router,private dataService: DataService,) { }

  ngOnInit(): void {
  }

  getError(field){
    return(this.signForm.get(field).touched||this.signForm.get(field).dirty)&& this.signForm.get(field).errors;
  
  }

  sign(){
    
    var data = this.dataService.details;
    var email = this.signForm.value.email
    var pass = this.signForm.value.pwd
    var name = this.signForm.value.name
    var num = this.signForm.value.num

    const filter= {email:email,password:pass}
    console.log(filter)
    var users= data.filter(item => {
     // for (let key in filter) {
      if (item.email==this.signForm.value.email && item.password==this.signForm.value.pwd) 
      {
        alert("Account already exists. Please login")
       this.router.navigateByUrl("");
      }
      else {
      alert("Added/Registered Successfully")
      this.data.push({
        name:name,
        num:num,
        email:email,
        password:pass,

      });
       this.dataService.saveDetails();
       console.log("after push to array", data)
       this.router.navigateByUrl("users");

    }

    });
  }
  

}
