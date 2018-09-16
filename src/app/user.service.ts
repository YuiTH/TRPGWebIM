import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static monkUser: User = {name: 'monkUser' , id: 567};
  myUser: User;
  constructor() {
    this.myUser = UserService.monkUser;
  }
}
