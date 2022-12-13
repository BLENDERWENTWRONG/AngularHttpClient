import { Component, OnInit } from '@angular/core';
import {FourService} from "../../services/four.service";
import {Four} from "../../models/four";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-updatefour',
  templateUrl: './updatefour.component.html',
  styleUrls: ['./updatefour.component.css']
})
export class UpdatefourComponent implements OnInit {

  id:number;
  four: Four = new Four();
  constructor(private fourService: FourService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params[`id`];
    this.fourService.getFour(this.id).subscribe(data=> {
      this.four = data;
    }, error => console.log(error))
  }

  onSubmit(){
    this.fourService.modFour(this.id,this.four).subscribe(data => {
      this.fourlist();
    }, error => console.log(error))
  }
  fourlist(){
    this.router.navigate(['/fournisseurs'])
  }

}
