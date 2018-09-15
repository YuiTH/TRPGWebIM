import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ChatroomModule} from './chatroom/chatroom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogDisplayComponent } from './log-displayer/log-display.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LogDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChatroomModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
