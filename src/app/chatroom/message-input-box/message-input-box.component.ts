import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-input-box',
  templateUrl: './message-input-box.component.html',
  styleUrls: ['./message-input-box.component.css']
})
export class MessageInputBoxComponent implements OnInit {
  TextMessage = '';
  constructor() { }
  rollDice() {
    let max = 100;
    let min = 1;
    let add = 0;
    const rollResult = Math.round(Math.random() * (max - min) + min + add);
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
