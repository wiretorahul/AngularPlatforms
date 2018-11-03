import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from "./contacts/contacts.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { DefaultComponent } from "./default/default.component";
import { ContactdetailComponent } from './contactdetails/contactdetails.component';


const routes: Routes = [
  // { path: '', redirectTo: '/contacts', pathMatch: 'full' }, 
  
  { path: 'contacts', component: ContactsComponent },
  { path: 'contactdetail/:id', component: ContactdetailComponent },
  { path: 'aboutus', component: AboutusComponent },
  // { path: 'feature2', loadChildren: 'app/feature2/feature2.module#Feature2Module'},
  // { path: 'feature1', loadChildren: 'app/feature1/feature1.module#Feature1Module'},
  { path: '', component: DefaultComponent, pathMatch: 'full' }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],

  declarations: []
})
export class AppRoutingModule {



}