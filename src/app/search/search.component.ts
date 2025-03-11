import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FlightService } from '../../services/flight.service';
import { FlightModel } from '../models/flight.model'
import { NgIf } from '@angular/common';
import { UtilsService } from '../../services/utils.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [MatTableModule, NgIf, MatButtonModule, MatCardModule, FormsModule, MatFormFieldModule, MatInput, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [UtilsService]
})
export class SearchComponent {
  displayedColumns: string[] = ['id', 'destination', 'flightNumber', 'scheduledAt', 'actions'];
  dataSource: FlightModel[] | null = null
  allData: FlightModel[] | null = null
  search: string = ''
  
  public constructor(public utils: UtilsService) {
    FlightService.getFlights(2, 4)
    .then(rsp => {
      this.dataSource = rsp.data.content
      this.allData = rsp.data.content
    })
  }

  doSearch(event: any) {
    const input = event.target.value
    if(this.allData == null) return

    if(input == '') {
      this.dataSource = this.allData
      return
    }

    this.dataSource = this.allData!.filter(obj => 
      obj.destination.toLowerCase().includes(input) ||
      obj.flightKey.includes(input) ||
      obj.flightNumber.toLowerCase().includes(input) ||
      obj.scheduledAt.includes(input)
    )
  }
    
}
 