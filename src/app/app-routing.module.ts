import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CoreModule } from './core/core.module';
//import { AdminModule } from './admin/admin.module';
//import { UserModule } from './user/user.module';

const routes: Routes = [];

@NgModule({
  imports: [
    ///CoreModule,
    //AdminModule,
    //UserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
