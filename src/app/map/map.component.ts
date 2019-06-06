import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { Map, TileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private element: ElementRef, private zone: NgZone) { }

  ngOnInit() {
    // Create the map outside of angular so the various map events don't trigger change detection
    this.zone.runOutsideAngular(() => {
      const map = new Map('map').setView([51.505, -0.09], 4);

      new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      }).addTo(map);
    });
  }

}
