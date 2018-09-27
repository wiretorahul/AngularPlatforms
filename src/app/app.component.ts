import { Component,Input} from '@angular/core';
import { BookLibraryService } from './book-library.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularChildTest';
 // books: string[];


  constructor(private myBookLibrary: BookLibraryService) {
    this.books = this.myBookLibrary.getLibraryBooks();

  }
    
  iAmPropertyOfAppComponent = "Someone";
  books = [];

  parentMethod($event) {
    alert('parent Method Called');
  }

  
}
