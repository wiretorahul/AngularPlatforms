import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status = true;
  buttonLabel = 'show';
  changeStatus() {
    this.status = !this.status;
    if (this.buttonLabel == 'show') {
      this.buttonLabel = 'hide';
    } else if (this.buttonLabel == 'hide') {
      this.buttonLabel = 'show';
    }
  }
}