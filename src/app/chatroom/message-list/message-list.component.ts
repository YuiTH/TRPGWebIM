import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';
import {UserService} from '../../user.service';
import {Message} from '../message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  constructor(private messageService: MessageService, private userService: UserService) { }

  ngOnInit() {
  }

  getMessages (): Message[] {
    return this.messageService.messagesList;
  }

}
