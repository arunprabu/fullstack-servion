import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {
  // Step 1: Create a variable in child comp
  // Step 2: and make it a custom property
  @Input() age = 20;

  constructor() { }

  ngOnInit() {
  }

}
