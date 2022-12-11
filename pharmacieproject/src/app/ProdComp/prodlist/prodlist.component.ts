import { Component, OnInit } from '@angular/core';
import {Prod} from "../../models/prod";
import {ProdService} from "../../services/prod.service";

@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrls: ['./prodlist.component.css']
})
export class ProdlistComponent implements OnInit {
   prods: Prod[];
  constructor(private prodService: ProdService) { }

  ngOnInit(): void {
    this.getProds();
  }
  private getProds(){
    this.prodService.getProdList().subscribe(data=>{
      this.prods=data;
    })
  }
}
