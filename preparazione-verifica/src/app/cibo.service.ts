import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 'app-track'

@Injectable({
  providedIn: 'root'
})
export class CiboService {

  constructor(private http: HttpClient) { }

  searchProd(query: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=9&json=true`;
    let obsProd = this.http.get(url);
    return obsProd;
  }

  searchDet(query: any) {
    const url = `https://world.openfoodfacts.org/api/v0/product/${query}`;
    let obsDet = this.http.get(url);
    return obsDet;
  }
}