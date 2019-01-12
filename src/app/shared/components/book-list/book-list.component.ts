import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books$: Observable<any[]>;

  constructor(private bookService:BookService) {
    this.books$ = bookService.getAll().pipe(map(changes =>{
       return changes.map(a => {
        const data = a.payload;
        const id = a.payload.key;
        //console.log('id' + id );
        //console.log('data' + data );
        return {id,data};
       })
       }))
   }

  ngOnInit() {
  }
  createBook() {
    this.bookService.create({d:'d'}) 
  };
  deleteBook(key) {
    this.bookService.delete(key); 
  };
  updateBook(key,book) {
    this.bookService.update(key,book); 
  };
    
}
