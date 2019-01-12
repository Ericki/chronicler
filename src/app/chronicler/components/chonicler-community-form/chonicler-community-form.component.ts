import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'shared/services/community.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-chonicler-community-form',
  templateUrl: './chonicler-community-form.component.html',
  styleUrls: ['./chonicler-community-form.component.css']
})
export class ChoniclerCommunityFormComponent implements OnInit {

  submitted: boolean;
  showSuccessMessage: boolean;
  hero$: any;
  
  form = new FormGroup({
    key: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    foundation: new FormControl(''),
    founders: new FormControl(''),
    category: new FormControl(''),
    etymology: new FormControl(''),
    heraldry: new FormControl(''),
    numberCommunities: new FormControl(''),
    year: new FormControl(''),
    mens: new FormControl(''),
    women: new FormControl('')
  });

  constructor(private communityService:CommunityService,
              private route: ActivatedRoute,
              private router: Router) {
    
  }
  
  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      //switchMap((params: ParamMap) =>
        //this.service.getHero(params.get('id')))
    //)
    )
  }

  createBook() {
    this.communityService.create({d:'d'}) 
  };
  deleteBook(key) {
    this.communityService.delete(key); 
  };
  updateBook(key,book) {
    this.communityService.update(key,book); 
  };
  
  onSubmit(){
    if (!(this.form.get('key').value == null)){
      this.communityService.create(this.form.value);
      console.log("este es el valor de key: "+  this.form.get('key').value);
      alert('Comunidad creada coorrectamente!');
      this.router.navigate(['/']);
    }else{  
      alert('se esta actualizando');
    }
  
    //this.bookService.update(this.form.get('$key'),this.form.value);
  this.showSuccessMessage = true;
  setTimeout(() => this.showSuccessMessage = false, 3000);
  this.submitted = false;

  }
}


