import { compileInjectable } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
 

  // details = {
  //  "a@gmail.com":{ name: "user1",num:1001, email: "a@gmail.com", password: 1234 },
  //   "b@gmail.com":{ name: "user2",num:1002, email: "b@gmail.com", password: 1235 },
  //  "c@gmail.com":{ name: "user3",num:1003, email: "c@gmail.com", password: 1236 },
  //   "d@gmail.com":{ name: "user4",num:1004, email: "d@gmail.com", password: 1237 },
  //   "e@gmail.com":{ name: "user5",num:1005, email: "e@gmail.com", password: 1238 },

  // }
  
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

  constructor(private fb: FormBuilder,private router: Router,private dataService: DataService,) { }

  ngOnInit(): void {
  }

  // details = [
  //   { name: "user1",num:1001, email: "a@gmail.com", password: 1234 },
  //    { name: "user2",num:1002, email: "b@gmail.com", password: 1235 },
  //   { name: "user3",num:1003, email: "c@gmail.com", password: 1236 },
  //    { name: "user4",num:1004, email: "d@gmail.com", password: 1237 },
  //    { name: "user5",num:1005, email: "e@gmail.com", password: 1238 },
 
  // ];

  // let newArray=details.filter((e)=>(return e.email===a@gmail.com)); 

  currentUser;
  
  // getDetails() {
  //   if (localStorage.getItem("details")) {
  //     this.details = JSON.parse(localStorage.getItem("details"));
  //   }

  //   if (localStorage.getItem("currentUser")) {
  //     this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  //   }
  // }

  // saveDetails() {
  //   localStorage.setItem("details", JSON.stringify(this.details));

  //   if (this.currentUser) {
  //     localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
  //   }
  // }

  getError(field){
    return(this.signForm.get(field).touched||this.signForm.get(field).dirty)&& this.signForm.get(field).errors;
  
  }

  sign(){
    
    var data = this.dataService.details;
    var email = this.signForm.value.email
    var pass = this.signForm.value.pwd
    var name = this.signForm.value.name
    var num = this.signForm.value.num

      // if (data.filter(obj => obj.email === email && obj.password === pass)) {
      //   alert("Account already exists. Please login")
      //   this.router.navigateByUrl("");
      // }
      // else {
      //  alert("Registered Successfully")
      //   this.data.push({
      //     name:name,
      //     num:num,
      //     email:email,
      //     password:pass,
      //   });
    
      // console.log("after", data)
      // this.dataService.saveDetails();
      // }
    var flag
    var filter= {email:this.signForm.value.email,password:this.signForm.value.pwd}
    console.log(filter)
    var users= data.filter(item => {
      for (let key in filter) {
      if (item[key] === undefined || item[key] != filter[key]) {
      flag =1
      break
      }
      else{
        flag=0
        break
      }
      //return true   
      }

    });

   if (flag==1) {
    alert("Registered Successfully")
      this.data.push({
        name:name,
        num:num,
        email:email,
        password:pass,
      });
  
    console.log("after", data)
    this.dataService.saveDetails();
   
    }

    else if(flag==0){
      alert("Account already exists. Please login")
        this.router.navigateByUrl("");
    }
      }
  }
  



