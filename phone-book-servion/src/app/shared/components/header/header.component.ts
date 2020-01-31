import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../../services/account-data.service';

@Component({
  selector: 'app-header', // element selector -- mandatory 
  templateUrl: './header.component.html', // html -- template should be only one and mandatory 
  styleUrls: ['./header.component.css'] // css -- can be multiple and optional
})
export class HeaderComponent implements OnInit {
  // ts
  profileName: string;

  constructor(private accountDataService: AccountDataService) { }

  ngOnInit() {
    // subscribe to the default value in ngOnInit
    this.accountDataService.latestProfileName.subscribe( (_profileName) => {
      console.log( _profileName);
      this.profileName = _profileName;
    });
  }

}
