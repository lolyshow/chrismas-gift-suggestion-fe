import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChristmasCountdownComponent } from "./components/christmas-countdown/christmas-countdown.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChristmasCountdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chrismas-gift-suggestion-frontend';
}
