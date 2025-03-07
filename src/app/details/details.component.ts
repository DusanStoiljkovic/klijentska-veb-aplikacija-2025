import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlightModel } from '../models/flight.model';
import { FlightService } from '../../services/flight.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { UtilsService } from '../../services/utils.service';
import { MatListModule } from '@angular/material/list';
import { SafePipe } from './safe.pipe';

@Component({
  selector: 'app-details',
  imports: [MatCardModule, MatButtonModule, MatListModule, NgIf, SafePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  public flight: FlightModel | null = null

  constructor(private route: ActivatedRoute, private router: Router, public utils: UtilsService) {
    route.params.subscribe(params => {
      FlightService.getFlightById(params['id']).then(rsp => { this.flight = rsp.data })
    })
  }

  goBack() {
    this.router.navigate(['/home'])
  }

  generateMapLink() {
    return `https://www.google.com/maps?output=embed&q=${this.flight?.destination}`
  }
}
