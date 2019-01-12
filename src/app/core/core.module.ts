import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';

//Modules
import { SharedModule } from 'shared/shared.module';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  declarations: [NavBarComponent, HomeComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
    //BsDatepickerModule.forRoot()
  ],
  exports: [
    NavBarComponent, HomeComponent, LoginComponent, RegisterComponent
  ],
  providers:[

  ]
})
export class CoreModule { }
