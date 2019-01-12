import { Injectable } from '@angular/core';
import { CrudDataService } from './crud-data.service';
import { FormGroup, FormControl,Validator, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CommunityService extends CrudDataService{

  constructor(db: AngularFireDatabase) { 
    super(db,'/communitys')
  }
/*
  form = new FormGroup({
    $key: new FormControl(null),
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),    
    fundacion: new FormControl('', Validators.required),
    fundadores: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    etimologia: new FormControl('', Validators.required),
    heraldica: new FormControl('', Validators.required),
    numeroComunidades: new FormControl('', Validators.required),
    ano: new FormControl('', Validators.required),
    hombres: new FormControl('', Validators.required),
    mujeres: new FormControl('', Validators.required)
  });
*/
}
