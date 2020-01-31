import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <p class="text-center">
      You need to login to access the page!
      <br>
      Login feature is under construction!
    </p>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
