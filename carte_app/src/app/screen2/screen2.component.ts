import { Component } from '@angular/core';
import { CapitalService } from '../capital.service';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component {
  capitals: any[];

  selectedCapital: any;

  constructor(private capitalService: CapitalService) {
    this.capitals = this.capitalService.getCapitals();
  }

  editCapital(capital: any): void {
    this.selectedCapital = { ...capital };
  }

  saveChanges(): void {
    this.capitalService.updateCapital(this.selectedCapital);
    this.selectedCapital = null;
  }

  createCapital(): void {
    const newCapital = { name: '', population: '', lat: 0, lng: 0 };
    this.capitalService.addCapital(newCapital);
    this.selectedCapital = newCapital;
  }

  deleteCapital(capital: any): void {
    this.capitalService.deleteCapital(capital);
    this.selectedCapital = null;
  }
}



