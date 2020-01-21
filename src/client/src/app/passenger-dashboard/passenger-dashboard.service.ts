import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, retry} from 'rxjs/operators';

import { Passenger } from './models/passenger.interface';

const httpOptions = {
    headers: new HttpHeaders ({
        'Content-Type': 'application/json'
    })
}

@Injectable()
export class PassengerDashboardService {
    baseUrl = 'http://localhost:3000/passengers';
    constructor(private http: HttpClient) {}

    getPassengers(): Observable<Passenger[]> {
        return this.http
        .get<Passenger[]>(`${this.baseUrl}`, httpOptions)
        .pipe(retry(1),
        catchError(this.handleError));
    }

    getPassenger(id: number): Observable<Passenger> {
        return this.http
        .get<Passenger>(`${this.baseUrl}/${id}`, httpOptions)
        .pipe(retry(1),
        catchError(this.handleError));
    }

    updatePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
        .put<Passenger>(`${this.baseUrl}/${passenger.id}`, passenger, httpOptions);
    }

    removePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
        .delete<Passenger>(`${this.baseUrl}/${passenger.id}`, httpOptions);
    }

    // !! change this to an interceptor version of error handling
    handleError(error) {
        let errorMessage = 'An error has occured';

        return throwError(errorMessage);
    };
}

