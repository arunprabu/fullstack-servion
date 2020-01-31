import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  restAPI = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) { }

  // 1. get the data from comp
  createContact( contactData: Contact ): Promise<Contact> {
    console.log(contactData);
    // 2. send it to rest api
    // 2.1 identify the rest api - https://jsonplaceholder.typicode.com/users
    // 2.2. what http method -- POST

    const createContactPromise = new Promise((resolve, reject) =>{
      this.http.post(this.restAPI, contactData)
        .toPromise()
        .then( (res: Contact) => { // 3. if res is successful
          console.log(res);
          resolve(res);
        })
        .catch( (err: any) => { // 3. if res is error
          console.log(err);
          reject(err);
        })
        .finally( () => {
          console.log('It\s Over!');
        });
    });

    return createContactPromise as Promise<Contact>; // 4. send the res back to the comp
  }

  getContacts(): Observable<Contact[]> {
    // send the call to rest api
    return this.http.get(this.restAPI)
      .pipe( map((res: Contact[]) => { // get res from rest api
        console.log(res);
        // enrich -- sort, filter, modify, remove
        return res;
      }));
  }

  getContactById(id: string): Observable<Contact> {
    return this.http.get(this.restAPI + id)
      .pipe( map((res: Contact) => { // get res from rest api
        console.log(res);
        return res;
      }));
  }

  updateContact(contactData: any): Promise<Contact> {
    console.log(contactData);

    const updateContactPromise = new Promise( (resolve, reject) => {
      this.http.put(this.restAPI + contactData.id, contactData)
        .toPromise()
        .then( (res: Contact) => {
          console.log(res);
          resolve(res);
        })
        .catch( (err: any) => {
          console.log(err);
          reject(err);
        })
        .finally( () => {
          console.log('It\s all done');
        });
    });

    return updateContactPromise as Promise<Contact>;

  }
}
