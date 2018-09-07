import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-input-box',
  templateUrl: './message-input-box.component.html',
  styleUrls: ['./message-input-box.component.css']
})
export class MessageInputBoxComponent implements OnInit {
  TextMessage = 'Text';
  constructor() { }
  rollDice() {
    let max = 100;
    let min = 0;
    let add = 0;
    const rollResult = Math.random() * (max - min) + add;
    console.log('roll1d100 ' + rollResult);
  }
  submit() {
    console.log('submit ' + this.TextMessage);
  }
  enterSubmit() {
    console.log('enterSubmit' + this.TextMessage);
  }
  ngOnInit() {
  }

}
