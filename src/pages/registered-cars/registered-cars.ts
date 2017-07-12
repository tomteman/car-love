import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-registered-cars',
  templateUrl: 'registered-cars.html',
})
export class RegisteredCars {
  cars: FirebaseListObservable<any[]>;
  newItem;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.cars = this.firebaseProvider.getCars();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisteredCars');
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

}
