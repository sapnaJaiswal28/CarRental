import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AutoLogoutService {
  timeoutId: any;
  warningId: any;
  warningDuration = 2 * 60 * 1000; // show alert at 4 minutes (1 min before logout)
  timeoutDuration = 3 * 60 * 1000; // 5 minutes

  constructor(private router: Router, private ngZone: NgZone) {
    this.initListener();
    this.resetTimer();
  }

  initListener() {
    ['click', 'mousemove', 'keypress', 'scroll'].forEach((event) => {
      window.addEventListener(event, () => this.resetTimer());
    });
  }

  resetTimer() {
    clearTimeout(this.timeoutId);
    clearTimeout(this.warningId);

    // schedule warning
    this.warningId = setTimeout(() => this.showWarning(), this.warningDuration);

    // schedule logout
    this.timeoutId = setTimeout(() => this.logout(), this.timeoutDuration);
  }

  showWarning() {
    const stayLoggedIn = confirm(
      'You will be logged out in 1 minute due to inactivity. Do you want to stay logged in?'
    );
    if (stayLoggedIn) {
      this.resetTimer(); // reset timers if user chooses to stay
    }
  }

  logout() {
    localStorage.removeItem('token'); // clear auth token
    this.router.navigate(['/login']); // redirect to login
  }
}
