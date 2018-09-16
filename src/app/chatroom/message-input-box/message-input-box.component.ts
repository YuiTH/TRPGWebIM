import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-message-input-box',
  templateUrl: './message-input-box.component.html',
  styleUrls: ['./message-input-box.component.css']
})
export class MessageInputBoxComponent implements OnInit {
  TextMessage = '';
  InputBoxLabel = 'Message';
  constructor(private messageService: MessageService, private userService: UserService) {
    this.InputBoxLabel = userService.myUser.name + ':';
  }
  rollDice(max: number= 100, min: number= 1, add: number = 0) {
    const rollResult = Math.round(Math.random() * (max - min) + min + add);
    console.log('roll1d100 ' + rollResult);
    this.messageService.send('roll1d100 ' + rollResult);
  }
  mySubmit() {
    console.log('mySubmit ' + this.TextMessage);
    this.messageService.send(this.TextMessage);
    this.TextMessage = '';
  }
  ngOnInit() {
  }

}
