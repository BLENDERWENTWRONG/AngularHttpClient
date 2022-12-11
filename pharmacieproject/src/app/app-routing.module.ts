import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourlistComponent } from '../app/FourComp/fourlist/fourlist.component';
import {ProdlistComponent} from '../app/ProdComp/prodlist/prodlist.component';
// import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

const routes: Routes = [
  { path: '', redirectTo: 'fournisseurs', pathMatch: 'full' },
  { path: 'fournisseurs', component: FourlistComponent },
  { path: 'produits', component: ProdlistComponent },

  // { path: 'tutorials/:id', component: TutorialDetailsComponent },
  // { path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
