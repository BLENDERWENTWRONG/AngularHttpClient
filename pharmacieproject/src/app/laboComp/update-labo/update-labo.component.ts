import { Component, OnInit } from '@angular/core';
import {Prod} from '../../models/prod';
import {ActivatedRoute, Router} from '@angular/router';
import {Labo} from '../../models/labo';
import {LaboService} from '../../services/labo.service';

@Component({
  selector: 'app-update-labo',
  templateUrl: './update-labo.component.html',
  styleUrls: ['./update-labo.component.css']
})
export class UpdateLaboComponent implements OnInit {

  id: number;
  lab: Labo = new Labo();

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ProdService: LaboService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.ProdService.getLabo(this.id).subscribe(data => {
      this.lab = data;
    }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.ProdService.modLabo(this.id, this.lab).subscribe(data => {
      this.lablist();
    }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  lablist() {
    this.router.navigate(['/laboratoires']);
  }
}
