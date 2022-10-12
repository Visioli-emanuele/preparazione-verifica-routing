import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CiboService } from '../cibo.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  routeObs: Observable<ParamMap> | undefined;
  ciboServiceObs: Observable<Object> | undefined;

  items: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CiboService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    console.log(params);
    let itemId = params.get('id'); //Ottengo l'id dai parametri
    console.log(itemId);
    this.ciboServiceObs = this.service.searchDet(itemId);
    this.ciboServiceObs.subscribe(
      (data) => ((this.items = data), console.log(data))
    );
  };

  back() : void
  {
  }
}
