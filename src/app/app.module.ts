import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ChatroomModule} from './chatroom/chatroom.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChatroomModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
