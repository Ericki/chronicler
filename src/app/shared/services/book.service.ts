import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
import { CrudDataService } from './crud-data.service';

@Injectable({
  providedIn: 'root'
})

export class BookService extends CrudDataService{

  constructor(db: AngularFireDatabase) { 
    super(db,'/books')
  }
}
