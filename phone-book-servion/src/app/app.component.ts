import { Component } from '@angular/core';

// Decorators
@Component({
  selector: 'app-root', // exposed as selector
  templateUrl: './app.component.html',  // html
  styleUrls: ['./app.component.css'] // css
})
export class AppComponent {
  // ts
  title = 'phone-book-servion';
}
