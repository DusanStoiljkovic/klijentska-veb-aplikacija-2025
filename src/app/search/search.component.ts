import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FlightService } from '../../services/flight.service';
import { FlightModel } from '../../models/flight.model';
import { NgIf } from '@angular/common';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-search',
  imports: [MatTableModule, NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [UtilsService]
})
export class SearchComponent {
  displayedColumns: string[] = ['id', 'destination', 'flightNumber', 'scheduledAt', 'actions'];
  dataSource: FlightModel[] | null = null
  
  public constructor(public utils: UtilsService) {
    FlightService.getFlights(2, 4)
    .then(rsp => this.dataSource = rsp.data.content)
  }
    
}
 