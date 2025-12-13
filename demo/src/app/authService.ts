import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(token: string) {
    debugger;
    // after verifying credentials, store a token or flag
    localStorage.setItem('token', token);
  }
  logout() {
    debugger;
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // true if token exists
  }
}
