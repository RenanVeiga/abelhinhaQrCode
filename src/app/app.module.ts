import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';
import { DarkmodeComponent } from './darkmode/darkmode.component';
import { GeradorqrcodeComponent } from './geradorqrcode/geradorqrcode.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkmodeComponent,
    GeradorqrcodeComponent,
    TelaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
