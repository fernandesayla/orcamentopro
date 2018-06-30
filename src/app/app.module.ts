import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrcamentoProvider } from '../providers/orcamento/orcamento';
import { AddPage } from '../pages/add/add';
import { CallNumber } from '@ionic-native/call-number';

/* LocalStorage */
import { LocalStorageModule } from 'angular-2-local-storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LocalStorageModule.withConfig({
      prefix: 'orcamentosApp',
      storageType: 'localStorage'
    })
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OrcamentoProvider
  ]
})
export class AppModule {}
