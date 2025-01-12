import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../services';

export const isAdminGuard: CanActivateFn = (route, state, authService = inject(AuthService)) => {
  return authService.isAdminUser();
};
