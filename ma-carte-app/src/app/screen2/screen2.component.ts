// src/app/screen2/screen2.component.ts
import { Component } from '@angular/core';
import { CapitalService } from '../capital.service';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css'],
})
export class Screen2Component {
  capitals = this.capitalService.capitals;

  constructor(private capitalService: CapitalService) {}

  // Vous pouvez ajouter des fonctions pour modifier les données des capitales ici
}

