import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListComponent } from './components/book-list/book-list.component';

import { BookService } from './services/book.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ComunityListComponent } from './components/comunity-list/comunity-list.component';
import { MunicipalityListComponent } from './components/municipality-list/municipality-list.component';
import { CountryComponent } from './components/country/country.component';
import { CommunityListComponent } from './components/community-list/community-list.component';
import { CrudDataService } from './services/crud-data.service';

import { RouterModule, Routes } from '@angular/router';

// Ngx
import { CarouselModule } from 'ngx-bootstrap';

//Firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';

//Environment
import { environment } from 'environments/environment';
import { DetailsUploadComponent } from './components/details-upload/details-upload.component';

const routes: Routes = [];

@NgModule({
  declarations: [BookListComponent, CarouselComponent, ImageListComponent, ComunityListComponent, MunicipalityListComponent, CountryComponent, CommunityListComponent, DetailsUploadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule.forRoot()
  ],
  exports:[
    BookListComponent, CarouselComponent, ImageListComponent, ComunityListComponent, MunicipalityListComponent, CountryComponent, CommunityListComponent
  ],
  providers: [
    CrudDataService
  ]
  
})
export class SharedModule { }
