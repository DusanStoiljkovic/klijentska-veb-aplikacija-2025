import { AirLineModel } from "../app/models/airline.model"

export class AirLineService {
    static getAirLines(): AirLineModel[] {
        return [
            {
                id: 1,
                name: 'Air Serbia',
                countryOfOrigin: 'Serbia',
                website: 'https://www.airserbia.com/'
            },
            {
                id: 2,
                name: 'Fly Emirates',
                countryOfOrigin: 'UAE',
                website: 'https://www.emirates.com/english'
            },
            {
                id: 3,
                name: 'Lufthansa',
                countryOfOrigin: 'Germany',
                website: 'https://www.lufthansa.com/'
            },
            {
                id: 4,
                name: 'Turkish Airlines',
                countryOfOrigin: 'Turkiye',
                website: 'https://www.turkishairlines.com/'
            }
        ]
    }
}