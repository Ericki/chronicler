import { Component, OnInit } from '@angular/core';
import { BookService } from 'shared/services/book.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map, take } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { Book } from 'shared/models/book';
//import 'rxjs/add/operator/take'; 
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-chonicler-book-form',
  templateUrl: './chonicler-book-form.component.html',
  styleUrls: ['./chonicler-book-form.component.css']
})
export class ChoniclerBookFormComponent implements OnInit {
  
  form = new FormGroup({
    key: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    publishingHouse: new FormControl(''),
    publicationDate: new FormControl(''),
    coverPage: new FormControl(''),
    synopsis: new FormControl('')
  });

  submitted: boolean;
  showSuccessMessage: boolean;
  id = this.route.snapshot.paramMap.get('id');
  
  locale = 'en';
  locales = listLocales();
 
  
  constructor(private bookService:BookService,
              private route: ActivatedRoute,
              private router: Router,
              private localeService: BsLocaleService) {
         }
   ngOnInit() {
    
    if (this.id){
   this.bookService.get(this.id)
    .pipe(take(1)).subscribe( p =>  
      this.form = new FormGroup({
        key: new FormControl(p.key),
        title: new FormControl(p.payload .child('/title').val()),
        author: new FormControl(p.payload .child('/author').val()),
        publishingHouse: new FormControl(p.payload .child('/publishingHouse').val()),
        publicationDate: new FormControl(p.payload .child('/publicationDate').val()),
        coverPage: new FormControl(p.payload .child('/coverPage').val()),
        synopsis: new FormControl(p.payload .child('/synopsis').val())
      })
      );
     
    }
  }
  
  
  deleteBook() {
    if (!confirm('Estas seguro de eliminar este libro?')) return;
    this.bookService.delete(this.id);
    this.router.navigate(['/chronicler/books']);
  }

  onSubmit(){
    if (!(this.id)){
      this.bookService.create(this.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      alert('Libro creado coorrectamente!');
      this.router.navigate(['/chronicler/books']);
      
    }
    else {
      this.bookService.update(this.id, this.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      alert('se esta actualizando');
      this.router.navigate(['/chronicler/books']);
    }
 
  }

  applyLocale(pop: any) {
    this.localeService.use(this.locale);
    pop.hide();
    pop.show();
  }
}

