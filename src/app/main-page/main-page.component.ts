import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  // details = {
  //   "a@gmail.com":{ name: "user1",num:1001, email: "a@gmail.com", password: 1234 },
  //   "b@gmail.com":{ name: "user2",num:1002, email: "b@gmail.com", password: 1235 },
  //   "c@gmail.com":{ name: "user3",num:1003, email: "c@gmail.com", password: 1236 },
  //   "d@gmail.com":{ name: "user4",num:1004, email: "d@gmail.com", password: 1237 },
  //   "e@gmail.com":{ name: "user5",num:1005, email: "e@gmail.com", password: 1238 },

  // }

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

  
  //currentUser;
  
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


  getError(field) {
    return (this.loginForm.get(field).touched || this.loginForm.get(field).dirty) && this.loginForm.get(field).errors;
  }

  login() { 
    var data = this.dataService.details;
    var email = this.loginForm.value.email
    var pass = this.loginForm.value.pwd
    var isLogin=false;

 
   var users = data.filter(obj => obj.email == email && obj.password == pass);
     console.log(data)
    console.log(users);

    if(users){
      alert("successfull login")
          this.dataService.saveDetails();
            console.log(this.dataService.details);
            console.log("filtered output"+users)
            this.router.navigateByUrl("dash"); 

    }
    else{
      alert("invalid login")

    }
     
    //var flag
    // const filter= {email:this.loginForm.value.email,password:this.loginForm.value.pwd}
    // console.log(filter)
//     var users= data.filter(item => {
//     console.log(item)
// //       // for (let key in filter) {
// //       //   if (item[key] === undefined || item[key] != filter[key]) 
// //       //   {
          
// //       //  // flag=1
// //       //  //alert("invalid credentials or form is invalid")
// //       //   return false;
// //       //   } 
// //       //   //flag=0
// //       //   return true ;   
// //       // }
//       if(item.email==this.loginForm.value.email && item.password==this.loginForm.value.pwd){
//         //console.log("test")
//         isLogin=true;
//         alert("successfull login")
//           this.dataService.saveDetails();
//             console.log(this.dataService.details);
//             //console.log("filtered output"+users)
//             this.router.navigateByUrl("dash");    
//       } else {
//         isLogin=false;
//         alert("invalid credentials")
//       }
//     });

    // console.log(isLogin)
    
  }
}


// login() {
//   if (this.loginForm.valid) {
//     const result = this.dataService.login(this.loginForm.value.email, this.loginForm.value.pwd);
    
//     this.dataService.saveDetails();
//     this.router.navigateByUrl("dash");

//   }  
// else
//   {
//     alert("form is invalid")
//   }
// }
// }













      
      // alert("successfull login")
      // this.dataService.saveDetails();
      // console.log(this.dataService.details);
      //console.log("filtered output"+users)
      // this.router.navigateByUrl("dash");
      

    // if (flag==1)
    // {
    //   alert("invalid credentials or form is invalid")
    // }
    // else if(flag==0){
    //   alert("successfull login")
    //   this.dataService.saveDetails();
    //   console.log(this.dataService.details);
    //   console.log(users)
    //   this.router.navigateByUrl("dash");

    // }
    
  

  //   if(data.filter(obj => obj.email == email && obj.password == pass)){
  //     alert("successfull login")
  //         this.dataService.saveDetails();
  //           console.log(this.dataService.details);
  //           this.router.navigateByUrl("dash");
            
  //  } 

  // else
  // {
  //   alert("invalid credentials or form is invalid")
  // }

// var obj= {email:"email",password:"pass"}
//   function containsObject(obj, data) {
//     var i;
//     for (i = 0; i < data.length; i++) {
//         if (data[i] === obj) {
//           alert("successfull login")
//                     this.router.navigateByUrl("dash");
//                     this.dataService.saveDetails();
//                     console.log(this.dataService.details);
//         }
//         else{
//             alert("invalid credentials or form is invalid")
//           }
//     }

    

        


  





