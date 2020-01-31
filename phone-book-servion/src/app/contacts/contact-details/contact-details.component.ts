import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';
// import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {

  contactData: Contact;
  duplicateContactData: Contact;
  isUpdated: boolean;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit() {
    // read url parameter
    const id = this.route.snapshot.paramMap.get('id');

    this.contactService.getContactById(id)
      .subscribe( (res: Contact) => {
        console.log(res);
        this.contactData = res;
      });
  }

  editModalClickHandler() {
    this.isUpdated = false;
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  async updateContactHandler() {
    console.log(this.duplicateContactData);
    const status: Contact = await this.contactService.updateContact(this.duplicateContactData);
    console.log(status);

    if (status && status.id) {
      this.isUpdated = true;
      setTimeout( () => {
        // close the modal
        $('#editContactModal').modal('hide');
        this.contactData = status;
      }, 4000);
    }

  }

}
