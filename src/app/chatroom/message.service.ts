import { Injectable } from '@angular/core';
import {Message} from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: Message;
  constructor() { }
}
