import { Injectable } from '@angular/core';
import {Message} from './message';
import {UserService} from '../user.service';
import {LoggerService} from '../logger.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messagesList: Message[] = [];
  constructor(private userService: UserService, private loggerService: LoggerService) {

  }
  send(messageText: string) {
    this.loggerService.add('new message form ' + this.userService.myUser.name); // debug only: log
    this.messagesList.push(new Message(messageText, this.userService.myUser));
    // TODO: communicate with server
  }
}
