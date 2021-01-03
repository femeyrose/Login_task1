import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  name = ""
  num = ""
  email = ""
  pwd = ""

  name2 = ""
  num2 = ""
  email2 = ""
  pwd2 = ""

  signForm = this.fb.group({
    name: ['', [Validators.required]],
    num: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required]],
    pwd: ['', [Validators.required]],
    name2: ['', [Validators.required]],
    num2: ['', [Validators.required, Validators.minLength(3)]],
    email2: ['', [Validators.required]],
    pwd2: ['', [Validators.required]]
  });

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

    var email2 = this.signForm.value.email2
    var pass2 = this.signForm.value.pwd2
    var name2 = this.signForm.value.name2
    var num2 = this.signForm.value.num2

    const filter= {email:email,password:pass}
    console.log(filter)
  

        data.map((item, i) => {
  if (item.email==this.signForm.value.email && item.password==this.signForm.value.pwd){
    data[i].name = this.signForm.value.name2;
    data[i].num = this.signForm.value.num2;
     data[i].email = this.signForm.value.email2;
     data[i].password= this.signForm.value.pwd2;
     this.dataService.saveDetails();
    console.log(this.dataService.details);
     alert("user details changed successfully")
    this.router.navigateByUrl("users");
   }
   else{
     alert("You are not allowed to change the details")
   }
      
 });

        

  }



}
