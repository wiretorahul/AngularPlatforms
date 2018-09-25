import { Component } from "@angular/core";
import { FetchDataService } from "./fetch-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data = {};
  show: boolean = false;
  item = {
    title: 'Trainer',
    body: 'Sourabh',
    userId: 555
  };

  constructor(private dataservice: FetchDataService) {}

  showData() {
    this.dataservice.getData().subscribe(data => {
      this.data = data;
    });
  }

  setData(){
    this.dataservice.postData(this.item).subscribe(response => console.log(response));
    this.data = {};
  }
}