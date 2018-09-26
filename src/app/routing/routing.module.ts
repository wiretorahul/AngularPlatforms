import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from '../contacts/contacts.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { DefaultComponent } from '../default/default.component';
//import { ContactsComponent } from "./contacts/contacts.component";
//import { AboutusComponent } from "./aboutus/aboutus.component";
//import { DefaultComponent } from "./default/default.component";


const routes: Routes = [
  // { path: '', redirectTo: '/contacts', pathMatch: 'full' }, 
  { path: '', component: DefaultComponent, pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'aboutus', component: AboutusComponent }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],

  declarations: []
})
export class RoutingModule { }
