import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class FirebaseProvider {
 firebaseConfig = {
      apiKey: "AIzaSyB-LdqlkvbfLHZtreOquR0irxuEW9AZpy4",
      authDomain: "car-love-a62b0.firebaseapp.com",
      databaseURL: "https://car-love-a62b0.firebaseio.com",
      projectId: "car-love-a62b0",
      storageBucket: "car-love-a62b0.appspot.com",
      messagingSenderId: "612466347163"
    };
  constructor(public afd: AngularFireDatabase) { }

  getCars() {
    return this.afd.list('/cars/');
  }

  addItem(car) {
    this.afd.list('/cars/').push(car);
  }

  removeItem(id) {
    this.afd.list('/cars/').remove(id);
  }
}
