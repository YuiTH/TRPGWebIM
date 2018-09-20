import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LogDisplayComponent} from '../log-displayer/log-display.component';

const appRoutes: Routes = [
  {path: 'logger-display', component: LogDisplayComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}, // debug only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
