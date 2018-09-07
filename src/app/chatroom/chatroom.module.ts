import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageInputBoxComponent } from './message-input-box/message-input-box.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MessageInputBoxComponent,
  ],
  declarations: [MessageInputBoxComponent]
})
export class ChatroomModule { }
