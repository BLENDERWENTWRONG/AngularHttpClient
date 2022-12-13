import {Component, OnInit} from '@angular/core';
import {Four} from '../../models/four';
import {FourService} from '../../services/four.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fourlist',
  templateUrl: './fourlist.component.html',
  styleUrls: ['./fourlist.component.css']
})
export class FourlistComponent implements OnInit {

  Fours: Four[];

  constructor(private fourService: FourService, private route: Router) {
  }

  ngOnInit(): void {
    this.getFours();
  }

  private getFours() {
    this.fourService.getFourList().subscribe(data => {
      this.Fours = data;
    });
  }

  updatefour(id: number) {
    this.route.navigate(['/updatefour', id]);
  }

  deletefour(id: number) {
    this.fourService.delFour(id).subscribe(data => {
        this.fourlist();
      }
    );
  }

  fourlist() {
    this.route.navigate(['/fournisseurs']);
  }
}
