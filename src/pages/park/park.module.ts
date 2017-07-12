import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Park } from './park';

@NgModule({
  declarations: [
    Park,
  ],
  imports: [
    IonicPageModule.forChild(Park),
  ],
  exports: [
    Park
  ]
})
export class ParkModule {}
