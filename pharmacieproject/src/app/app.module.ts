import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { FourlistComponent } from './FourComp/fourlist/fourlist.component';
import { AddfourComponent } from './FourComp/addfour/addfour.component';
import { UpdatefourComponent } from './FourComp/updatefour/updatefour.component';
import {AppRoutingModule} from "./app-routing.module";
import { ProdlistComponent } from './ProdComp/prodlist/prodlist.component';
import {FormsModule} from "@angular/forms";
import { AddprodComponent } from './ProdComp/addprod/addprod.component';
import { UpdateprodComponent } from './ProdComp/updateprod/updateprod.component';
import { LogincompComponent } from './logincomp/logincomp.component';
import { AddLaboComponent } from './laboComp/add-labo/add-labo.component';
import { ListLaboComponent } from './laboComp/list-labo/list-labo.component';
import { UpdateLaboComponent } from './laboComp/update-labo/update-labo.component';

@NgModule({
  declarations: [
    AppComponent,
    FourlistComponent,
    AddfourComponent,
    UpdatefourComponent,
    ProdlistComponent,
    AddprodComponent,
    UpdateprodComponent,
    LogincompComponent,
    AddLaboComponent,
    ListLaboComponent,
    UpdateLaboComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
