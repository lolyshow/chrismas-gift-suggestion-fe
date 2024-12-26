import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChristmasCountdownComponent } from "./components/christmas-countdown/christmas-countdown.component";
import { GiftSearchComponent } from "./components/gift-search/gift-search.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChristmasCountdownComponent, GiftSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chrismas-gift-suggestion-frontend';
}
