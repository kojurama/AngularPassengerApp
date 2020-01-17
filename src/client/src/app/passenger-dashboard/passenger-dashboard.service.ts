import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';

import { Passenger } from './models/passenger.interface';

@Injectable()
export class PassengerDashboardService {
    constructor(private http: HttpClient) {}
    url = 'http://localhost:4000';

    getPassengers(): Observable<Passenger[]> {
        return this.http.get<Passenger[]>(`${this.url}/passengers`);
    }
}
