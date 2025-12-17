import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutoLogoutService {
  timeoutId: any;
  timeoutDuration = 2 * 60 * 1000; // 2 minutes

  constructor(private router: Router, private ngZone: NgZone) {
    this.initListener();
    this.resetTimer();
  }

  initListener() {
    ['click', 'mousemove', 'keypress', 'scroll'].forEach(event => {
      window.addEventListener(event, () => this.resetTimer());
    });
  }

  resetTimer() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.logout(), this.timeoutDuration);
  }

  logout() {
    localStorage.removeItem('token'); // clear auth token
    this.router.navigate(['/login']); // redirect to login
  }
}