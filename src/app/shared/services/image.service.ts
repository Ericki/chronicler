import { Injectable } from '@angular/core';
import { CrudDataService } from './crud-data.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ImageService extends CrudDataService{

  constructor( db: AngularFireDatabase) { 
    super(db, '/images')
  }

}


