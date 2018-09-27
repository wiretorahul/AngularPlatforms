import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildInputComponent } from './child-input/child-input.component';
import { ChildOutputComponent } from './child-output/child-output.component';
import { BookLibraryService } from './book-library.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildInputComponent,
    ChildOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 

  ],
  providers: [BookLibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
