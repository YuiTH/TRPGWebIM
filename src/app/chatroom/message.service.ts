import { Injectable } from '@angular/core';
import {Message} from './message';
import {UserService} from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messagesList: Message[] = [];
  constructor(private userService: UserService) {

  }
  send(messageText: string) {
    this.messagesList.push(new Message(messageText, this.userService.myUser));
    // TODO: communicate with server
  }
}
