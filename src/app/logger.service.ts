import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {
  }

  log: String[] = [];
  add(log: String) {
    this.log.push(log);
  }
  clear() {
    this.log = [];
  }
}

