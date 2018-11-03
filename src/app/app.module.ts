import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule } from "@angular/router";
import { DefaultComponent } from './default/default.component';
import { Feature1Module } from "./feature1/feature1.module";
import { Feature2Module } from "./feature2/feature2.module";
import { ContactdetailComponent } from './contactdetails/contactdetails.component';




@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutusComponent,
    DefaultComponent,
    ContactdetailComponent

  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule,Feature1Module,Feature2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }