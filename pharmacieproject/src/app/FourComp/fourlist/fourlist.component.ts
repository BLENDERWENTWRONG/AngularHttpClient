import { Component, OnInit } from '@angular/core';
import {Four} from '../../models/four'
import {FourService} from "../../services/four.service";
@Component({
  selector: 'app-fourlist',
  templateUrl: './fourlist.component.html',
  styleUrls: ['./fourlist.component.css']
})
export class FourlistComponent implements OnInit {

  Fours: Four[];
  constructor(private fourService: FourService) { }

  ngOnInit(): void {
    this.getFours();
  }
  private getFours(){
    this.fourService.getFourList().subscribe(data=>{
      this.Fours=data;
    })
  }
}
