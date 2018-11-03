import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailComponent implements OnInit {

  myParams = {};
  y ="Rahul";

  constructor(private ar : ActivatedRoute) {
    this.ar.params.subscribe(params => this.myParams = params);
    
   }

  ngOnInit() {
  }

}
