import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from './models/trip';
import { Authentication } from './authentication';

@Injectable({
  providedIn: 'root'
})
export class TripData {
  private apiUrl = 'http://localhost:3000/api/trips';

  constructor(
    private http: HttpClient,
    private authentication: Authentication
  ) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  getTrip(tripCode: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(
      `${this.apiUrl}/${tripCode}`
    );
  }

  addTrip(trip: Trip): Observable<Trip> {
  const token = this.authentication.getToken();

  console.log(
    'TripData token:',
    token ? 'TOKEN FOUND' : 'NO TOKEN'
  );

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  return this.http.post<Trip>(
    this.apiUrl,
    trip,
    { headers }
  );
}

  updateTrip(trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(
      `${this.apiUrl}/${trip.code}`,
      trip,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  deleteTrip(tripCode: string): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/${tripCode}`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.authentication.getToken();

    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }
}