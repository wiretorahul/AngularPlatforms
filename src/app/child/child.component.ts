import { Component, OnInit, Input } from "@angular/core";
import { OnChanges } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit,OnChanges {
  @Input() secret ;
  constructor() {
    alert("constructor called");
  }
  title = "lifecycle";
  ngOnInit() {
    // only once at the time of initializaiton of component
    alert("ngOnInit called");
  }
  ngOnChanges() {
    // after every changes in component's proprties
    alert("ngOnChanges called");
  }
  ngDoCheck() {
    // after every change detection run cycle
    alert("ngDoCheck Called");
  }
  ngOnContentInit() {
    // after content of the component has been initialized
    alert("ngOnContentInit called");
  }

  ngAfterViewInit() {
    // after view of the component has been intialized
    alert("ngAfterViewInit called");
  }

  ngAfterViewChecked() {
    // after every time view is checked
    alert("ngAfterViewChecked called");
  }
  ngAfterContentChecked() {
    //after everytime content is checked
    alert("ngAfterContentChecked called");
  }

  ngOnDestroy() {
    // before destroying every component
    alert("ngOnDestroy called");
  }
}