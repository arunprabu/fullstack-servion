import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {
  // Step 1: Create a variable in child comp
  // Step 2: and make it a custom event
  @Output() profileLoaded = new EventEmitter();

  featureName = 'Custom Event Binding';
  
  constructor() {
    console.log('Inside Constructor');
  }

  ngOnInit() {
    console.log('Inside ngOnInit');
    // step3: let's emit the event
    this.profileLoaded.emit( 'Arun');
    // Step 5: pass the data to parent comp as above
  }

}
