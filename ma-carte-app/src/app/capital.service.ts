// src/app/capital.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CapitalService {
  capitals = [
    { name: 'Paris', country: 'France', population: 2140526 },
    // Ajoutez d'autres capitales ici
  ];

  // Vous pouvez ajouter des fonctions pour manipuler les données des capitales si nécessaire
}

