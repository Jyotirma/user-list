import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: ''
  },
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
  {
    component: BarChartComponent,
    path: 'barchart'
  },
  {
    component: UserComponent,
    path: 'user'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
