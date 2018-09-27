import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 //title = 'Basic Property test';

  title = 'app'; // this is class property
  name = 'Harry'; // I am adding here another property
  displayMyName (){ // this is class method
    alert(this.name); // will display my name
  }
}
