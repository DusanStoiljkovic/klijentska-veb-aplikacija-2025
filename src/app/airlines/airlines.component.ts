import { Component } from '@angular/core';
import { AirLineModel } from '../models/airline.model';
import {MatTableModule} from '@angular/material/table';
import { NgIf } from '@angular/common';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-airlines',
  imports: [MatTableModule, NgIf, LoadingComponent],
  templateUrl: './airlines.component.html',
  styleUrl: './airlines.component.css'
})
export class AirlinesComponent {
  displayedColumns: string[] = ['id', 'name', 'countryOfOrigin', 'website']

  public dataSource: AirLineModel[] | null = [
    {
      id: 1,
      name: "AirSerbia",
      countryOfOrigin: "Serbia",
      website: "www.airserbia.com"
    },
    {
      id: 2,
      name: "Lufthansa",
      countryOfOrigin: "Germany",
      website: "www.lufthansa.com"
    },
    {
      id: 3,
      name: "Air France",
      countryOfOrigin: "France",
      website: "www.airfrance.com"
    },
    {
      id: 4,
      name: "British Airways",
      countryOfOrigin: "United Kingdom",
      website: "www.britishairways.com"
    },
    {
      id: 5,
      name: "Turkish Airlines",
      countryOfOrigin: "Turkey",
      website: "www.turkishairlines.com"
    },
    {
      id: 6,
      name: "Emirates",
      countryOfOrigin: "United Arab Emirates",
      website: "www.emirates.com"
    },
    {
      id: 7,
      name: "Qatar Airways",
      countryOfOrigin: "Qatar",
      website: "www.qatarairways.com"
    },
    {
      id: 8,
      name: "KLM Royal Dutch Airlines",
      countryOfOrigin: "Netherlands",
      website: "www.klm.com"
    },
    {
      id: 9,
      name: "Delta Air Lines",
      countryOfOrigin: "United States",
      website: "www.delta.com"
    },
    {
      id: 10,
      name: "Singapore Airlines",
      countryOfOrigin: "Singapore",
      website: "www.singaporeair.com"
    },
    {
      id: 11,
      name: "Japan Airlines",
      countryOfOrigin: "Japan",
      website: "www.jal.co.jp"
    }
  ];

}
