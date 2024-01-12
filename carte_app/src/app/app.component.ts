import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nom-de-votre-projet';
  constructor(private router: Router) {}
  navigateToScreen1() {
    this.router.navigate(['/screen1']);
  }

  navigateToScreen2() {
    this.router.navigate(['/screen2']);
  }
}




