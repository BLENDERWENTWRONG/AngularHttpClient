import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourlistComponent } from '../app/FourComp/fourlist/fourlist.component';
import {ProdlistComponent} from '../app/ProdComp/prodlist/prodlist.component';
import {AddfourComponent} from './FourComp/addfour/addfour.component';
import {AddprodComponent} from './ProdComp/addprod/addprod.component';
import {UpdatefourComponent} from './FourComp/updatefour/updatefour.component';
import {UpdateprodComponent} from './ProdComp/updateprod/updateprod.component';
import {AddLaboComponent} from './laboComp/add-labo/add-labo.component';
import {ListLaboComponent} from './laboComp/list-labo/list-labo.component';
import {UpdateLaboComponent} from './laboComp/update-labo/update-labo.component';

const routes: Routes = [
  { path: '', redirectTo: 'fournisseurs', pathMatch: 'full' },
  { path: 'fournisseurs', component: FourlistComponent },
  { path: 'AddFour', component: AddfourComponent },
  { path: 'updatefour/:id', component: UpdatefourComponent },
  { path: 'produits', component: ProdlistComponent },
  { path: 'addprod', component: AddprodComponent },
  {path: 'updateprod/:id', component: UpdateprodComponent},
  {path: 'addlab', component: AddLaboComponent},
  {path: 'laboratoires', component: ListLaboComponent},
  {path: 'updatelab/:id', component: UpdateLaboComponent},




  // { path: 'tutorials/:id', component: TutorialDetailsComponent },
  // { path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
