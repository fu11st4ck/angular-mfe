import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services';

export const loggedInGuard: CanActivateFn = (route, state,router = inject(Router), authService = inject(AuthService)) => {
  if (authService.isUserLoggedIn()) {
    router.navigate(['/dashboard']);
  }
  return !authService.isUserLoggedIn();
};
