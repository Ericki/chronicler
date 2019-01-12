import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MunicipalityService } from 'shared/services/municipality.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'municipality-list',
  templateUrl: './municipality-list.component.html',
  styleUrls: ['./municipality-list.component.css']
})
export class MunicipalityListComponent implements OnInit {

  municipalitys$: Observable<any[]>;

  constructor(private municipalityService:MunicipalityService) {
    this.municipalitys$ = municipalityService.getAll().pipe(map(changes =>{
       return changes.map(a => {
        const data = a.payload;
        const id = a.payload.key;
        return {id,data};
       })
       }))
   }

  ngOnInit() {
  }
  createMunicipality() {
    this.municipalityService.create({d:'d'}) 
  };
  deleteMunicipality(key) {
    this.municipalityService.delete(key); 
  };
  updateMunicipality(key,municipality) {
    this.municipalityService.update(key,municipality); 
  };
}


