import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookLibraryService {


  
  libraryBooks = ['The Jungle Book', 'Harry Potter'];

  constructor() { }


  getLibraryBooks(){
    return this.libraryBooks;


  }
}
