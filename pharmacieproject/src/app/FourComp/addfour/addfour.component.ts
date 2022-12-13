import { Component, OnInit } from '@angular/core';
import {Four} from "../../models/four";
import {FourService} from "../../services/four.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addfour',
  templateUrl: './addfour.component.html',
  styleUrls: ['./addfour.component.css']
})
export class AddfourComponent implements OnInit {

  four: Four= new Four();
  constructor(private fourService: FourService, private route: Router) { }

  ngOnInit(): void {
  }

  fourlist(){
    this.route.navigate(['/fournisseurs']);
  }
  savefour(){
    this.fourService.addFour(this.four).subscribe(data=>{
      console.log(data);
    }, error => console.log(error));
  }
  onSubmit(){
    console.log(this.four);
    this.savefour();
    this.fourlist();
  }
}
