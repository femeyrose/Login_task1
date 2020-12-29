import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import {SignComponent} from './sign/sign.component';


const routes: Routes = [
  {
    path:'',component: MainPageComponent,
  
  },
  {
    path:'sign',component: SignComponent,
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
