import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'My Unit Testing App!';

  add( x, y) {
    console.log(x + y);
    return x + y;
  }
}
