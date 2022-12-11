import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { FourlistComponent } from './FourComp/fourlist/fourlist.component';
import { AddfourComponent } from './FourComp/addfour/addfour.component';
import { UpdatefourComponent } from './FourComp/updatefour/updatefour.component';
import {AppRoutingModule} from "./app-routing.module";
import { ProdlistComponent } from './ProdComp/prodlist/prodlist.component';

@NgModule({
  declarations: [
    AppComponent,
    FourlistComponent,
    AddfourComponent,
    UpdatefourComponent,
    ProdlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
