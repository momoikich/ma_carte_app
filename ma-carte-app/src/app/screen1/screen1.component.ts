// src/app/screen1/screen1.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css'],
})
export class Screen1Component {
  // Déclarez ici les variables nécessaires, par exemple, pour stocker les capitales
  capitals: any[] = [
    { name: 'Paris', population: 2141000, lat: 48.8566, lng: 2.3522 },
    // Ajoutez les autres capitales
  ];

  // Ajoutez ici la logique nécessaire, par exemple, pour gérer le clic sur un marker
  onMarkerClick(capital: any) {
    // Implémentez l'action à effectuer lors du clic sur un marker
    console.log('Marker clicked:', capital.name);
  }
}

