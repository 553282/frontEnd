import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEND';

  //später durch Datenbank
  zettels = ["1. Zettel","2",3,4,5,6,7,8,9,10, 11,12,13,14,15,16, 17, 18, 19]

 
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
