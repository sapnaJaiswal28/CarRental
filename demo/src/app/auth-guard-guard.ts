import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './authService';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  debugger;
  if (authService.isAuthenticated()) {
    return true; // allow access
  } else {
    router.navigate(['/login']); // redirect to login
    return false; // block access
  }
};
