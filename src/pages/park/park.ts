import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Status } from '../status/status'
/**
 * Generated class for the Park page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-park',
  templateUrl: 'park.html',
})
export class Park {
  carNumber;
  name;
  phoneNumber;
  parkingSpot;
  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.carNumber = this.navParams.get('carNumber');
    this.name = this.navParams.get('name');
    this.phoneNumber = this.navParams.get('phoneNumber');
    this.firebaseProvider.isParked(this.phoneNumber).subscribe(res=> {
      this.navCtrl.push(Status);
    });
  }

  park() {
    this.firebaseProvider.isParked(this.phoneNumber).subscribe(res=> {
      if (res.length) {
        console.log('you are already parked!');
      } else {
        this.firebaseProvider.isParkingSpotTaken(this.parkingSpot).subscribe(res=> {
          if (res.length) {
            console.log('parking spot taken');
          } else {
            const now = new Date ();
            const future = new Date ( now );
            future.setHours ( now.getHours() + 6 );
            this.firebaseProvider.parkCar(this.phoneNumber, this.parkingSpot, now.toString(), future.toString()).then(res=> {
              this.navCtrl.push(Status);
            })
          }
        })
      }
    })


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Park');
  }

}
