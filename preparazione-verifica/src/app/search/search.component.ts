import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { CiboService } from '../cibo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string | undefined;
  obsPrd: Observable<Object> | undefined;
  results: any;
  constructor(public cibo: CiboService) {
    
   }

   submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsPrd = this.cibo.searchProd(this.query);
    this.obsPrd.subscribe((data: any) => {
      this.results = data;
      console.log(this.results);
      localStorage.setItem('dataSource', JSON.stringify(this.results));
    });
  }

  ngOnInit(): void {
  }

}
