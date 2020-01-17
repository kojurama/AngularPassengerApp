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
    baseUrl = 'http://localhost:4000/passengers';
    constructor(private http: HttpClient) {}

    getPassengers(): Observable<Passenger[]> {
        return this.http
        .get<Passenger[]>(`${this.baseUrl}`, httpOptions)
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

/*
  // PUT
  UpdateBug(id, data): Observable<Bug> {
    return this.http
    .put<Bug>(this.baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  

    @Injectable()
export class PassengerDashboardService {
    constructor(private http: HttpClient) {}
    baseUrl = 'http://localhost:4000';

    getPassengers(): Observable<Passenger[]> {
        return this.http
        .get<Passenger[]>(`${this.url}/passengers`);
    }

    updatePassengers(passenger: Passenger): Observable<Passenger> {
        return this.http
        .put<Passenger>(`${this.url}/${passenger.id}`, passenger);
    }
}

*/
