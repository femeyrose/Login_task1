import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import {SignComponent} from './sign/sign.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';
import {EdituserComponent} from './edituser/edituser.component';
import {DeleteuserComponent} from './deleteuser/deleteuser.component';
import {AdduserComponent} from './adduser/adduser.component';
import {EditComponent} from './edit/edit.component';



const routes: Routes = [
  {
    path:'',component: MainPageComponent,
  
  },
  {
    path:'sign',component: SignComponent,
  
  },
  {
    path:'dash',component: DashboardComponent,
  
  },
  {
    path:'users',component: UsersComponent,
  
  },
  {
    path:'edit',component: EdituserComponent,
  
  },
  {
    path:'add',component: AdduserComponent,
  
  },
  {
    path:'delete',component: DeleteuserComponent,
  
  },
  {
    path:'edituser',component: EditComponent,
  
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
