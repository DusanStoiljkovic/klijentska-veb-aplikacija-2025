import { Component } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { AxiosError } from 'axios';
import { FlightModel } from '../models/flight.model';
import { MatCardModule } from '@angular/material/card';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from '../loading/loading.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-home',
  imports: [JsonPipe, NgIf, NgFor, MatCardModule, LoadingComponent, MatButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  public flights: FlightModel[] | null = null
  public error: string | null = null
  public user = UserService.getActiveUser()

  constructor(public utils: UtilsService) {
    FlightService.getFlights()
      .then(rsp => this.flights = rsp.data.content)
      .catch((e: AxiosError) => this.error = `${e.code}: ${e.message}`)
  }
}
