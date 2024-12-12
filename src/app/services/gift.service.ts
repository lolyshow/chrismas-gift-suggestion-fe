import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  private apiUrl = 'http://localhost:8080/chrismas-gift-suggestion/api/search.php';
  constructor(private http: HttpClient) { }

  searchGifts(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?query=${query}`);
  }
}
