import { query } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CiboService } from '../cibo.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  constructor(public cibo: CiboService) {

  }

  ngOnInit(): void {
  }

}