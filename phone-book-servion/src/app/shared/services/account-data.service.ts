import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  // step 1: should load this one from db via services -- now mocking it with static data
  profileName = 'Arun';

  // Step 2: Create BehaviourSubject with default value
  private myProfile = new BehaviorSubject<any>(this.profileName);

  // Step 3: Create Observable for the BehaviourSubject..
   // so any component can subscribe to it.
  latestProfileName: Observable<any> = this.myProfile.asObservable();
  // latestProfileName is subscribable


  constructor() {
  }

  // sending next value over the private variable
  // so components that are subscribing will be getting new value
  updateProfileName( profileInput: HTMLInputElement ) {
    console.log(profileInput.value);
    this.myProfile.next(profileInput.value);
  }

}
