import { Component } from '@angular/core';
import { GiftService } from '../../services/gift.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiResponse, Gift } from '../../model/gift.model';

@Component({
  selector: 'app-gift-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './gift-search.component.html',
  styleUrl: './gift-search.component.css'
})
export class GiftSearchComponent {

  searchQuery: string = '';
  results: Gift[] = [];
  selectedGift: any = null;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private giftService: GiftService) {}

  search(): void {
    if (!this.searchQuery.trim()) {
      this.results = [];
      return;
    }
    this.isLoading = true;
    this.errorMessage = '';

    this.giftService.searchGifts(this.searchQuery).subscribe(
      (data: ApiResponse) => {
        this.results = data.data;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Error fetching gift data. Please try again later.';
        console.error('Error fetching gift data:', error);
      }
    );
  }

  selectGift(gift: Gift): void {
    this.selectedGift = gift;
  }

  closeDetails(): void {
    this.selectedGift = null;
  }
}
