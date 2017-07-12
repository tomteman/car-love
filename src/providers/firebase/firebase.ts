import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }

  getCars() {
    return this.afd.list('/cars/');
  }

  isRegisteredCar(phoneNumber) {
    return this.afd.list('/cars/', {
      query: {
        orderByChild: 'phoneNumber',
        equalTo: phoneNumber
      }
    });
  }

  isParked(phoneNumber) {
    return this.afd.list('/parking/', {
      query: {
        orderByChild: 'phoneNumber',
        equalTo: phoneNumber,
      }
    });
  }

  isParkingSpotTaken(parkingSpot) {
    return this.afd.list('/parking/', {
      query: {
        orderByChild: 'parkingSpot',
        equalTo: parkingSpot,
      }
    });
  }

  getParkedCars() {
    return this.afd.list('/parking/');
  }

  parkCar(phoneNumber, parkingSpot, timeStart, timeFinish) {
    return this.afd.list('/parking/').push({
      phoneNumber,
      parkingSpot,
      timeStart,
      timeFinish,
    });
  }

  unparkCar(phoneNumber) {
    return this.isParked(phoneNumber).subscribe(res=> {
      if (res.length) {
        return this.afd.list('/parking/').remove(res[0].$key)
      }
    })
  }

  addItem(car) {
    return this.afd.list('/cars/').push(car);
  }

  removeItem(id) {
    return this.afd.list('/cars/').remove(id);
  }
}
