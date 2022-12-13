import {Component, OnInit} from '@angular/core';
import {Four} from '../../models/four';
import {FourService} from '../../services/four.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProdService} from '../../services/prod.service';
import {Prod} from '../../models/prod';

@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.css']
})
export class UpdateprodComponent implements OnInit {

  id: number;
  prod: Prod = new Prod();

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ProdService: ProdService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.ProdService.getProd(this.id).subscribe(data => {
      this.prod = data;
    }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.ProdService.modProd(this.id, this.prod).subscribe(data => {
      this.prodlist();
    }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  prodlist() {
    this.router.navigate(['/produits']);
  }

}
