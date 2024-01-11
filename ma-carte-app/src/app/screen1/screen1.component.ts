// screen1.component.ts
import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements AfterViewInit {
  capitals = [
    { name: 'Paris', population: '2.138 million', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', population: '37.833 million', lat: 35.6895, lng: 139.6917 },
    { name: 'New York', population: '8.398 million', lat: 40.7128, lng: -74.0060 },
    { name: 'Berlin', population: '3.645 million', lat: 52.5200, lng: 13.4050 },
    { name: 'Beijing', population: '21.516 million', lat: 39.9042, lng: 116.4074 }
  ];

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap(): void {
    const map = L.map('map').setView([20, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    this.capitals.forEach(capital => {
      L.marker([capital.lat, capital.lng])
        .addTo(map)
        .bindPopup(`${capital.name}<br>Population: ${capital.population}`)
        .on('click', () => {
          // Gérer le clic sur le marqueur ici
        });
    });
  }
}



