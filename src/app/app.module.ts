import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ChatroomModule} from './chatroom/chatroom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogDisplayComponent } from './log-displayer/log-display.component';
import {MatButtonModule} from '@angular/material';
import {Route, RouterModule} from '@angular/router';


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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
