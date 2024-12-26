import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/gift.model';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  private apiUrl = 'http://localhost:8080/chrismas-gift-suggestion/api/search.php';
  constructor(private http: HttpClient) { }

  searchGifts(query: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}?query=${query}`);
  }
}
