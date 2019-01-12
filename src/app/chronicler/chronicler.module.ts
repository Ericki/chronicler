import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { ChoniclerBooksComponent } from './components/chonicler-books/chonicler-books.component';
import { ChoniclerBookFormComponent } from './components/chonicler-book-form/chonicler-book-form.component';
import { ChoniclerGalleryComponent } from './components/chonicler-gallery/chonicler-gallery.component';
import { ChoniclerImageComponent } from './components/chonicler-image/chonicler-image.component';
import { ChoniclerCommunitysComponent } from './components/chonicler-communitys/chonicler-communitys.component';
import { ChoniclerCommunityFormComponent } from './components/chonicler-community-form/chonicler-community-form.component';
import { ChoniclerManageUserComponent } from './components/chonicler-manage-user/chonicler-manage-user.component';
import { ChoniclerUserFormComponent } from './components/chonicler-user-form/chonicler-user-form.component';
import { ChoniclerSettingsComponent } from './components/chonicler-settings/chonicler-settings.component';
import { ChoniclerUploadImageComponent } from './components/chonicler-upload-image/chonicler-upload-image.component';
import { ChoniclerUploadBookComponent } from './components/chonicler-upload-book/chonicler-upload-book.component';
import { ChoniclerUploadFileComponent } from './components/chonicler-upload-file/chonicler-upload-file.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

//// ngx Boostrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const routes: Routes = [
  {path:'chronicler/books', component: ChoniclerBooksComponent},
  {path:'chronicler/book:new', component: ChoniclerBookFormComponent},
  {path:'chronicler/book/:id', component: ChoniclerBookFormComponent},
  {path:'chronicler/gallery', component: ChoniclerGalleryComponent},
  {path:'chronicler/image:new', component:ChoniclerImageComponent},
  {path:'chronicler/image/:id', component: ChoniclerImageComponent},
  {path:'chronicler/communitys', component: ChoniclerCommunitysComponent},
  {path:'chronicler/community:new', component: ChoniclerCommunityFormComponent},
  {path:'chronicler/community/:id', component: ChoniclerCommunityFormComponent},
  {path:'chronicler/users', component: ChoniclerManageUserComponent},
  {path:'chronicler/user:new', component: ChoniclerUserFormComponent},
  {path:'chronicler/user:/id', component: ChoniclerUserFormComponent},
  {path:'chronicler/settings', component: ChoniclerSettingsComponent}
];

@NgModule({
  declarations: [ChoniclerBooksComponent, ChoniclerBookFormComponent, ChoniclerGalleryComponent, ChoniclerImageComponent, ChoniclerCommunitysComponent, ChoniclerCommunityFormComponent, ChoniclerManageUserComponent, ChoniclerUserFormComponent, ChoniclerSettingsComponent, ChoniclerUploadImageComponent, ChoniclerUploadBookComponent, ChoniclerUploadFileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    BsDatepickerModule.forRoot()
  ]
})
export class ChroniclerModule { }

