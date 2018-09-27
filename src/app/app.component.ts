import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'styleBindtest';


  numbers = [4,5,6];
  
  checkSpecial(){
    if(true === true){
      return true;
    }else{
      return false;
    }
  }

  classConfig = {
    special : true,  // nameOFthe Class : boolean value
    verySpecial : true

  }

  styleConfig = {
    color  : 'yellow',  // nameOFthe Class : boolean value
    backgroundColor : 'green'

  }




}
