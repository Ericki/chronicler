import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './components/books/books.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CommunityComponent } from './components/community/community.component';
import { MunicipalityComponent } from './components/municipality/municipality.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

const routes: Routes = [
  {path:'books', component: BooksComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'municipality', component: MunicipalityComponent},
  {path:'community', component: CommunityComponent}
];
    
@NgModule({
  declarations: [BooksComponent, GalleryComponent, CommunityComponent, MunicipalityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class UserModule { }
