import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  private capitalsSubject = new BehaviorSubject<any[]>(this.capitals);
  capitals$ = this.capitalsSubject.asObservable();

  getCapitals(): any[] {
    return this.capitals;
  }

  updateCapital(updatedCapital: any) {
    // Recherchez l'index de la capitale à mettre à jour
    const index = this.capitals.findIndex(capital => capital.name === updatedCapital.name);

    if (index !== -1) {
      // Mettez à jour la capitale
      this.capitals[index] = { ...this.capitals[index], ...updatedCapital };

      // Émettez un événement pour informer les composants de la modification
      this.capitalsSubject.next([...this.capitals]);
    }
  }

  deleteCapital(capitalToDelete: any) {
    const index = this.capitals.indexOf(capitalToDelete);
    if (index !== -1) {
      this.capitals.splice(index, 1);
    }

    // Émettez un événement pour informer les composants de la suppression
    this.capitalsSubject.next([...this.capitals]);
  }


  addCapital(newCapital: any): void {
    // Logique pour ajouter une nouvelle capitale
    this.capitals.push(newCapital);
    // Émettez un événement pour informer les composants de la suppression
    this.capitalsSubject.next([...this.capitals]);
  }

}

