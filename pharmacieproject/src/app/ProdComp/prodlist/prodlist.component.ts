import { Component, OnInit } from '@angular/core';
import {Prod} from "../../models/prod";
import {ProdService} from "../../services/prod.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {error} from "protractor";

@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrls: ['./prodlist.component.css']
})
export class ProdlistComponent implements OnInit {
  prods: Prod[];

  constructor(private prodService: ProdService, private route: Router) {
  }

  ngOnInit(): void {
    this.getProds();
  }

  private getProds() {
    this.prodService.getProdList().subscribe(data => {
      this.prods = data;
    })
  }
  getlist(){
    this.route.navigate(['/produits'])
  }
  deleteprod(id:number){
    this.prodService.delProd(id).subscribe(data=>{
        this.getlist()
      }, error => console.log(error)
    )
  }
}
