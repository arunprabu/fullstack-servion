import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit, AfterViewInit {
  // string interpolation related
  appName = 'Phone Book';  // implicit typing
  devExp = 13;
  skillsList: Array<string> = [
    'html', 'css', 'js', 'nodejs'
  ];

  // property Binding related
  devName = 'Arun';
  isLoggedIn = false;

  dataFromCEB;

  @ViewChild(CebComponent, {static: false}) cebData;

  constructor() {
  }

  ngOnInit() {
    console.log('Inside ngOnit in Concepts');
  }

  // accessing data from child comp
  ngAfterViewInit(){
    console.log('Inside ngAfterViewInit in Concepts');
    console.log(this.cebData);
  }

  getExp(): number {
    return this.devExp;
  }

  onBtnClick( evt ) {
    console.log(evt);
    evt.target.innerText = 'Clicked';
  }

  getAge() {
    return 100;
  }

  // step 5: custom event binding called this method
  profileLoadedHandler( evt ) {
    console.log( evt );
    this.dataFromCEB = evt;
  }
}
