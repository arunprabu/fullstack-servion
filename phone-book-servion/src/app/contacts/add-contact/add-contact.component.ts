import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, 
  Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  // Step 1: Create FormGroup
  contactForm: FormGroup;
  isSaved: boolean;

  constructor( private contactService: ContactService) { // dep injection

  }

  ngOnInit() {
    // Step 2: Instantiate Form Group
    this.contactForm = new FormGroup({
      // Step 3: Create FormControl
      name: new FormControl('arun', Validators.required),
      phone: new FormControl('1312', Validators.required),
      email: new FormControl('a@b.com', [Validators.required, Validators.email])
    });
    // Step 4: Refer this comp's html
  }

  async contactFormSubmitHandler() {
    console.log(this.contactForm.value);

    // 1. send the data to service
    const status: Contact  = await this.contactService.createContact(this.contactForm.value);
    console.log(status); // 2. waiting to get resp from service

    if (status && status.id) {
      console.log(status);
      this.isSaved = true;
    }
  }

}
