import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisteredCars } from './registered-cars';

@NgModule({
  declarations: [
    RegisteredCars,
  ],
  imports: [
    IonicPageModule.forChild(RegisteredCars),
  ],
  exports: [
    RegisteredCars
  ]
})
export class RegisteredCarsModule {}
