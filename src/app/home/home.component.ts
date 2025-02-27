import { Component } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { AxiosError } from 'axios';
import { FlightModel } from '../../models/flight.model';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-home',
  imports: [JsonPipe, NgIf, NgFor, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public flights: FlightModel[] | null = null
  public error: string | null = null

  constructor() {
    FlightService.getFlights()
      .then(rsp => this.flights = rsp.data.content)
      .catch((e: AxiosError) => this.error = `${e.code}: ${e.message}`)
  }

  public formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('sr-RS')
  }

  public imageURL(destination: string) {
    return `https://img.pequla.com/destination/${destination.split(' ')[0].toLowerCase()}.jpg`
  }

}
