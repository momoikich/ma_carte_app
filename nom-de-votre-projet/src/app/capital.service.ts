import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {
  capitals = [
    { name: 'Paris', population: '2.138 million', lat: 48.51, lon: 2.3522 },
    { name: 'Tokyo', population: '37.833 million', lat: 35.6895, lon: 139.6917 },
    { name: 'New York', population: '8.398 million', lat: 40.7128, lon: -74.0060 },
    { name: 'Berlin', population: '3.645 million', lat: 52.5200, lon: 13.4050 },
    { name: 'Beijing', population: '21.516 million', lat: 39.9042, lon: 116.4074 }
  ];

  getCapitals(): any[] {
    return this.capitals;
  }

  updateCapital(updatedCapital: any): void {
    // Logique pour mettre à jour une capitale
    // Vous pouvez implémenter la logique de mise à jour en fonction de vos besoins
  }

  addCapital(newCapital: any): void {
    // Logique pour ajouter une nouvelle capitale
    this.capitals.push(newCapital);
  }

  deleteCapital(deletedCapital: any): void {
    // Logique pour supprimer une capitale
    const index = this.capitals.indexOf(deletedCapital);
    if (index !== -1) {
      this.capitals.splice(index, 1);
    }
  }
}

