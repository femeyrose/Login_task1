import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import {SignComponent} from './sign/sign.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';


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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
