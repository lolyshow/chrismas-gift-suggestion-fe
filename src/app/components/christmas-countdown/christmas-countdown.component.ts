import { Component } from '@angular/core';

@Component({
  selector: 'app-christmas-countdown',
  standalone: true,
  imports: [],
  templateUrl: './christmas-countdown.component.html',
  styleUrl: './christmas-countdown.component.css'
})
export class ChristmasCountdownComponent {

  countdown: string = '';

  ngOnInit(): void {
    this.calculateCountdown();
    setInterval(() => this.calculateCountdown(), 1000);  // update every second
  }

  calculateCountdown(): void {
    const christmas = new Date(new Date().getFullYear(), 11, 25); // dec 25
    const now = new Date();
    const diff = christmas.getTime() - now.getTime();

    if (diff <= 0) {
      this.countdown = "🎉 Merry Christmas! 🎉";
    } else {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      this.countdown = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
  }
}
