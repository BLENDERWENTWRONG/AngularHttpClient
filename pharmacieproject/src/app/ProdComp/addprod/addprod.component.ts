import { Component, OnInit } from '@angular/core';
import {Prod} from "../../models/prod";
import {ProdService} from "../../services/prod.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent implements OnInit {

  prod: Prod = new Prod();
  constructor(private prodService:ProdService, private route: Router) { }

  ngOnInit(): void {
  }

  prodlist(){
    this.route.navigate(['/produits']);
  }
  saveprod(){
    this.prodService.addProd(this.prod).subscribe(data=>{
      console.log(data);
    }, error => console.log(error))
  }
  onSubmit(){
    console.log(this.prod);
    this.saveprod();
    this.prodlist()
  }
}
