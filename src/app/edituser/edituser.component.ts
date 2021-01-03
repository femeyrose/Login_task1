import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  email=""
  pwd=""

  // public show:boolean = false;
  // public buttonName:any = 'show';

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
    var data = this.dataService.details;
    var email = this.loginForm.value.email
    var pass = this.loginForm.value.pwd

    const filter= {email:this.loginForm.value.email,password:this.loginForm.value.pwd}
    console.log(filter)
    var users= data.filter(item => {
    console.log(item)

    if(item.email==this.loginForm.value.email && item.password==this.loginForm.value.pwd){
     // console.log("test")
      alert("successfull login")
     
     //console.log("filtered output"+users)
     alert("Click 'ok' for edit this user")

     this.router.navigateByUrl("edituser");

// data.map((item, i) => {
//   if (item.email==this.loginForm.value.email && item.password==this.loginForm.value.pwd){
//      data[i].email = this.loginForm.value.email;
//      data[i].password= this.loginForm.value.pwd;
//    }
//  });

        //  this.dataService.saveDetails();
        //  console.log(this.dataService.details);
        //  alert("user details changed successfully")
        //  this.router.navigateByUrl("users");
         
    }
   
          
       });

      }

      // toggle() {
      //   this.show = !this.show;
      
      //   // CHANGE THE NAME OF THE BUTTON.
      //   if(this.show)  
      //     this.buttonName = "show";
      //   else
      //     this.buttonName = "hide";
      // }
      

}

