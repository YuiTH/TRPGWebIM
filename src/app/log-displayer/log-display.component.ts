import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../logger.service';

@Component({
  selector: 'app-log-display',
  templateUrl: './log-display.component.html',
  styleUrls: ['./log-display.component.css']
})
export class LogDisplayComponent implements OnInit {

  constructor(public logger: LoggerService) {
  }
  clear() {
    this.logger.clear();
  }
  ngOnInit() {
  }
}
