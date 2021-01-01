import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  details = [
     { name: "user1",num:1001, email: "a@gmail.com", password: 1234 },
     { name: "user2",num:1002, email: "b@gmail.com", password: 1235 },
     { name: "user3",num:1003, email: "c@gmail.com", password: 1236 },
     { name: "user4",num:1004, email: "d@gmail.com", password: 1237 },
     { name: "user5",num:1005,email: "e@gmail.com",  password: 1238 },

  ];

  constructor() 
   {
    this.getDetails()
   }

  currentUser;
  

  getDetails() {
    if (localStorage.getItem("details")) {
      this.details = JSON.parse(localStorage.getItem("details"));
    }

    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
  }

  saveDetails() {
    localStorage.setItem("details", JSON.stringify(this.details));

    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    }
  }

  // getTodos(){

  //   return this.details()
  // }


  // sign(name,num,email,pwd) {
  //   if (email in this.details) {
  //     alert("account already exists. Please login")
  //     return false; 
  //   }
   
  //   this.details[email] = {
  //     name,
  //     num,
  //     email,
  //     password: pwd,
  //   }
  //   // console.log("after", this.details)
  //   this.saveDetails();
  //   return true;
  // }

  // login(email1, password) {
  //   var data = this.details;
  //   if (email1 in data) {
  //     var pwd = data[email1].password
  //     if (pwd == password) {
  //       this.currentUser = data[email1];
  //       this.saveDetails();
  //       return true;
  //     }
  //   }
  // }
}
