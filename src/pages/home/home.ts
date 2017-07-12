import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisteredCars } from '../registered-cars/registered-cars'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  manageCars() {
      this.navCtrl.setRoot(RegisteredCars);
  }

}
