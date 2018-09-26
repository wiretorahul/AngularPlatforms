import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { AppRoutingModule } from './/app-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule } from "@angular/router";

import { DefaultComponent } from './default/default.component';
import { CapslockPipe } from './Capslock.pipe';
import { RoutingModule } from './routing/routing.module';




@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutusComponent,
    DefaultComponent,
    CapslockPipe
  ],
  imports: [
    BrowserModule,FormsModule, RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }