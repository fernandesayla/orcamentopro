import { BrowserModule } from '@angular/platform-browser';
import {  LOCALE_ID, ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrcamentoProvider } from '../providers/orcamento/orcamento';
import { AddPage } from '../pages/add/add';
import { CallNumber } from '@ionic-native/call-number';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
 
/* LocalStorage */
import { LocalStorageModule } from 'angular-2-local-storage';
registerLocaleData(localePt, 'pt');

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
    OrcamentoProvider,
    { provide: LOCALE_ID, useValue: 'pt' } 
  ]
})
export class AppModule {}
