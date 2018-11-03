import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { Feature1RoutingModule } from "./feature1-routing.module";

@NgModule({
  imports: [
    CommonModule,Feature1RoutingModule
  ],
  declarations: [RedComponent, GreenComponent],
  exports : [RedComponent, GreenComponent]
})
export class Feature1Module { }