import { query } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CiboService } from '../cibo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string | undefined;
  obsTrack: Observable<Object> | undefined;
  results: any;
  constructor(public cibo: CiboService) {
    
   }
   submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.cibo.searchCibo(this.query);
    this.obsTrack.subscribe((data) => { this.results = data; console.log(this.results) });
  }

  ngOnInit(): void {
  }

}
