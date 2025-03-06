import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlightModel } from '../models/flight.model';
import { UtilsService } from '../utils.service';
import { AirLineModel } from '../models/airline.model';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { AirLineService } from '../../services/airline.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-order',
  imports: [MatCardModule, NgIf, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, NgFor],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  public flight: FlightModel | null = null
  public airlines: AirLineModel[] = AirLineService.getAirLines()
  public selectedAirLine: AirLineModel | null = this.airlines[0]
  public selectedTicketCount: number = 1
  public selectedPrice: number = 150
  
  constructor(private route: ActivatedRoute, public utils: UtilsService) {
    route.params.subscribe(params => {
      FlightService.getFlightById(params['id'])
      .then(rsp => {
        this.flight = rsp.data
      })
    })
  }

  public doOrder() {
    const result = UserService.createOrder({
      flightId: this.flight!.id,
      flightNumber: this.flight!.flightNumber,
      destination: this.flight!.destination,
      airline: this.selectedAirLine!.name,
      count: this.selectedTicketCount,
      pricePerItem: this.selectedPrice,
      status: 'ordered',
      rating: null
    })
  }
}
