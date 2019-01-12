import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CrudDataService } from './crud-data.service';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService extends CrudDataService{

  constructor(db: AngularFireDatabase) { 
    super(db,'/municipalitys')
  }
}
