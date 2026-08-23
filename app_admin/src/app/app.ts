import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { Authentication } from './authentication';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Travlr Getaways Admin');

  constructor(
    public authentication: Authentication,
    private router: Router
  ) {}

  logout(): void {
    this.authentication.logout();
    this.router.navigate(['/login']);
  }
}