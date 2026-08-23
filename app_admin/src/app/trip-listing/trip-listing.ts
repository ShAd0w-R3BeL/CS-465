import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripCard } from '../trip-card/trip-card';
import { Trip } from '../models/trip';
import { TripData } from '../trip-data';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListing implements OnInit {
  trips = signal<Trip[]>([]);
  message = signal('');

  constructor(private tripData: TripData) {}

  ngOnInit(): void {
    this.getTrips();
  }

  private getTrips(): void {
    this.tripData.getTrips().subscribe({
      next: (value: Trip[]) => {
        this.trips.set(value);

        if (value.length > 0) {
          this.message.set(`There are ${value.length} trips available.`);
        } else {
          this.message.set('There were no trips retrieved from the database.');
        }

        console.log(this.message());
      },
      error: (error: any) => {
        console.error('Error retrieving trips:', error);
        this.message.set('Error retrieving trips from the database.');
      }
    });
  }
}