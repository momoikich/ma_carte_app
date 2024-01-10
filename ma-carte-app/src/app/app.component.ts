import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>My Angular App</h1>
    <app-screen1></app-screen1>
    <app-screen2></app-screen2>
    <!-- ... autres composants ou directives -->
  `,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(private router: Router) {}

  navigateToScreen1() {
    this.router.navigate(['/screen1']);
  }

  navigateToScreen2() {
    this.router.navigate(['/screen2']);
  }
}

