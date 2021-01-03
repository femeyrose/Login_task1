import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

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
    var data = this.dataService.details;
    var email = this.loginForm.value.email
    var pass = this.loginForm.value.pwd

    const filter= {email:this.loginForm.value.email,password:this.loginForm.value.pwd}
    console.log(filter)
    var users= data.filter(item => {
    console.log(item)

    if(item.email==this.loginForm.value.email && item.password==this.loginForm.value.pwd){
      console.log("test")
      alert("successfull login")
     //console.log("filtered output"+users)
       alert("Click 'ok' for deleting this user")


//delete fn

for (let items of data) {
  if (items.email==this.loginForm.value.email && items.password==this.loginForm.value.pwd) {
      data.splice(data.indexOf(items), 1);
      break;
  }      
}
console.log(data)


         this.dataService.saveDetails();
         alert("user deleted successfully")
         console.log(this.dataService.details);
         this.router.navigateByUrl("users");
         
    }
   
          
       });

      }
    }



