import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'shared/services/community.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.css']
})
export class CommunityListComponent implements OnInit {

  communitys$: Observable<any[]>;

  constructor(private communityService:CommunityService) {
    this.communitys$ = communityService.getAll().pipe(map(changes =>{
       return changes.map(a => {
        const data = a.payload;
        const key = a.payload.key;
        return {key,data};
       })
       }))
   }

  ngOnInit() {
  }
  createCommunity() {
    this.communityService.create({d:'d'}) 
  };
  deleteCommunity(key) {
    this.communityService.delete(key); 
  };
  updateCommunity(key,community) {
    this.communityService.update(key,community); 
  };

}
