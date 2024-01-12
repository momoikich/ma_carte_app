import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM, Vector as VectorSource } from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { transform } from 'ol/proj';
import Overlay from 'ol/Overlay';
import VectorLayer from 'ol/layer/Vector';
import {CapitalService} from '../capital.service';

@Component({
  selector: 'app-screen1',
  template: `
    <div id="map" style="width: 100%; height: 400px;"></div>
    <div *ngIf="hoveredCapital">
      <p>latitude : {{ hoveredCapital[0] }}</p>
      <p>longitude: {{ hoveredCapital[1] }}</p>
    </div>
  `
})
export class Screen1Component implements OnInit {
  capitals: any[];
  constructor(private capitalService: CapitalService) {
    this.capitals = this.capitalService.getCapitals();
  }
  hoveredCapital: any;

  ngOnInit() {
    this.initMap();
    this.capitals = this.capitalService.getCapitals();
  }

  private initMap(): void {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
    const overlay = new Overlay({
      element: document.createElement('div'),
      positioning: 'bottom-center',
      stopEvent: false,
    });
    map.on('pointermove', (event) => {
      const pixel = map.getEventPixel(event.originalEvent);

      // Vérifier si la souris survole un point de la capitale
      const feature = map.forEachFeatureAtPixel(pixel, (ft) => ft);
      if (feature && feature.get('capital')) {
        // Afficher les informations de la capitale survolée
        this.hoveredCapital = transform(event.coordinate, 'EPSG:3857', 'EPSG:4326');
        overlay.setPosition(transform(event.coordinate, 'EPSG:4326', 'EPSG:3857'));
        map.addOverlay(overlay);
      } else {
        this.hoveredCapital = null;
      }
    });

    this.capitals.forEach(capital => {
      const marker = new Feature({
        geometry: new Point(transform([capital.lon, capital.lat], 'EPSG:4326', 'EPSG:3857'))
      });
      marker.set('capital', true);


      const overlay = new Overlay({
        element: document.createElement('div'),
        positioning: 'bottom-center',
        stopEvent: false
      });
      overlay.setElement(this.createOverlayElement(capital));
        // Utiliser la méthode transform pour convertir les coordonnées
      overlay.setPosition(transform([capital.lon, capital.lat], 'EPSG:4326', 'EPSG:3857'));
      map.addOverlay(overlay);
      


      const vectorLayer = new VectorLayer({
        source: new VectorSource({
          features: [marker]
        })
      });

      map.addLayer(vectorLayer);

    
    });
  }
  
  private createOverlayElement(capital: any): HTMLElement {
    const element = document.createElement('div');
    element.innerHTML = `<strong>${capital.name}</strong><br>Population: ${capital.population}`;
    return element;
  }

}




