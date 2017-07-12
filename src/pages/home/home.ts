import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisteredCars } from '../registered-cars/registered-cars'
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Park } from '../park/park';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cars: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, navParams: NavParams, afAuth: AngularFireAuth, public firebaseProvider: FirebaseProvider) {
    this.cars = this.firebaseProvider.getCars();

    afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('PHONE', res.phoneNumber);
        firebaseProvider.isRegisteredCar(res.phoneNumber).subscribe(res=> {
          console.log(res);
          if (res.length) {
            this.navCtrl.push(Park, res[0]);
            console.log('REGISTERED');
          } else {
            console.log('UNREGISTERED');
          }
        })
      } else {
        console.log('this should not happen!');
      }
    });
  }

  manageCars() {
      this.navCtrl.setRoot(RegisteredCars);
  }

}
