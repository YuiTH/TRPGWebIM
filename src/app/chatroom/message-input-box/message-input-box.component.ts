import { Component, OnInit } from '@angular/core';
import {LoggerService} from '../../logger.service';

@Component({
  selector: 'app-message-input-box',
  templateUrl: './message-input-box.component.html',
  styleUrls: ['./message-input-box.component.css']
})
export class MessageInputBoxComponent implements OnInit {
  TextMessage = '';
  constructor(private logger: LoggerService) { }
  rollDice() {
    let max = 100;
    let min = 1;
    let add = 0;
    const rollResult = Math.round(Math.random() * (max - min) + min + add);
    console.log('roll1d100 ' + rollResult);
    this.logger.add('roll1d100 ' + rollResult);
  }
  mySubmit() {
    console.log('mySubmit ' + this.TextMessage);
    this.logger.add('mySubmit ' + this.TextMessage);
  }
  enterSubmit() {
    console.log('enterSubmit' + this.TextMessage);
    this.logger.add('enterSubmit ' + this.TextMessage);
  }
  ngOnInit() {
  }

}
