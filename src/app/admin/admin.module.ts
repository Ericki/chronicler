import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminManageUserComponent } from './components/admin-manage-user/admin-manage-user.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'admin/home', component: AdminHomeComponent},
  {path:'admin/users', component: AdminManageUserComponent}
];

@NgModule({
  declarations: [AdminHomeComponent, AdminManageUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class AdminModule { }


