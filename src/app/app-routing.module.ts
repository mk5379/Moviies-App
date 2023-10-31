import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: "details/:id",
    component: DetailsComponent
  },
  {
    path: 'register-form',
    component: RegisterFormComponent
  },
  {
    path: 'login-form',
    component: LoginFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
