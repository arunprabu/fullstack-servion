import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from './contact.service';
import { Subscription } from 'rxjs';
import { Contact } from './contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: Contact[];
  contactsSubscription: Subscription;

  constructor( private contactService: ContactService) { }

  ngOnInit() {
    console.log('Inside ngOnInit');
    this.contactsSubscription = this.contactService.getContacts()
      .subscribe( (res: Contact[]) => {
        console.log(res);
        this.contactList = res;
      });
  }

  ngOnDestroy() {
    console.log('Inside destroy');
    // ideal place to clear the data and unsubscribe 
    if (this.contactList && this.contactList.length > 0) {
      this.contactList.length = 0;
    }
    this.contactsSubscription.unsubscribe();
  }

}
