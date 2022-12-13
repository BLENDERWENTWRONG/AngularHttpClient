import { Component, OnInit } from '@angular/core';
import {LaboService} from '../../services/labo.service';
import {Router} from '@angular/router';
import {Labo} from '../../models/labo';

@Component({
  selector: 'app-list-labo',
  templateUrl: './list-labo.component.html',
  styleUrls: ['./list-labo.component.css']
})
export class ListLaboComponent implements OnInit {

  labs: Labo[];

  constructor(private labService: LaboService, private route: Router) {
  }

  ngOnInit(): void {
  }

  private getLabs() {
    this.labService.getLabolist().subscribe(data => {
      this.labs = data;
    });
  }

  updatelab(id: number) {
    this.route.navigate(['/updatelab', id]);
  }

  delLab(id: number) {
    this.labService.delLabo(id).subscribe(data => {
        this.getLabs();
      }
    );
  }
}
