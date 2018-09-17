import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageInputBoxComponent } from './message-input-box/message-input-box.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule} from '@angular/material';
import { MessageListComponent } from './message-list/message-list.component';
import { ChatroomComponent } from './chatroom/chatroom.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [
    ChatroomComponent,
  ],
  declarations: [MessageInputBoxComponent, MessageListComponent, ChatroomComponent]
})
export class ChatroomModule { }
