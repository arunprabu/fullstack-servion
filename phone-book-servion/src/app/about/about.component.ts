import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../shared/services/account-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  randomText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  today: Date = new Date();
  dummyText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias necessitatibus accusantium';
  profileName: string;

  constructor( private accountDataService: AccountDataService) { }

  ngOnInit() {
    // subscribe to the default value in ngOnInit
    this.accountDataService.latestProfileName.subscribe( (_profileName) => {
      console.log( _profileName);
      this.profileName = _profileName;
    });
  }

  onProfileNameChange(newName) {
    console.log(newName);
    this.accountDataService.updateProfileName(newName);
  }

}
