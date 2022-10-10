import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 'app-track'
@Injectable({
  providedIn: 'root'
})
export class CiboService {
  constructor() {
    searchCibo(query: string) {
      const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=2&json=true`;
      let obsTracks = this.http.get(url, { Headers });
      return obsTracks;
   //Ritorno un observable ai componenti che richiedono il servizio
    }
   }
}
function searchCibo(query: any, string: any) {
  throw new Error('Function not implemented.');
}

