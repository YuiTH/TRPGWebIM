import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageInputBoxComponent } from './message-input-box/message-input-box.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { MessageListComponent } from './message-list/message-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    MessageInputBoxComponent,
  ],
  declarations: [MessageInputBoxComponent, MessageListComponent]
})
export class ChatroomModule { }
