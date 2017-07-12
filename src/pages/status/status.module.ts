import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Status } from './status';

@NgModule({
  declarations: [
    Status,
  ],
  imports: [
    IonicPageModule.forChild(Status),
  ],
  exports: [
    Status
  ]
})
export class StatusModule {}
