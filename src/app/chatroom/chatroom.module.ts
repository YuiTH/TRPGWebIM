import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageInputBoxComponent } from './message-input-box/message-input-box.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';

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
  declarations: [MessageInputBoxComponent]
})
export class ChatroomModule { }
