import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent} from './dash-board/dash-board.component'



const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'home', component: HomeComponent },
  {path:'dashboard', component: DashBoardComponent }
  

]


@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
