import { query } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() {
    
   }
   Submit(query: HTMLInputElement): void{
  }
  ngOnInit(): void {
  }

}
