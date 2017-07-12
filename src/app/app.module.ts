import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from './../pages/login/login.module';
import { RegisteredCarsModule } from'./../pages/registered-cars/registered-cars.module'


// Import the AF2 Module
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseProvider } from './../providers/firebase/firebase';

const firebaseConfig = {
      apiKey: "AIzaSyB-LdqlkvbfLHZtreOquR0irxuEW9AZpy4",
      authDomain: "car-love-a62b0.firebaseapp.com",
      databaseURL: "https://car-love-a62b0.firebaseio.com",
      projectId: "car-love-a62b0",
      storageBucket: "car-love-a62b0.appspot.com",
      messagingSenderId: "612466347163"
    };


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    LoginPageModule,
    RegisteredCarsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
