import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutoLogoutService } from './service/auto-logout-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private autoLogoutService: AutoLogoutService) {
    // Service starts listening for activity immediately
  }

  protected readonly title = signal('demo');
 
}
