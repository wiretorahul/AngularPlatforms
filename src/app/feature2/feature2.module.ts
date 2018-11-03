import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppleComponent } from './apple/apple.component';
import { BananaComponent } from './banana/banana.component';
import { Feature2RoutingModule } from "./feature2-routing.module";

@NgModule({
  imports: [
    CommonModule,Feature2RoutingModule
  ],
  declarations: [AppleComponent, BananaComponent]
})
export class Feature2Module { }