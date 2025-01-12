import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@ezms/shared';

@Component({
  imports: [CommonModule],
  selector: 'app-dashboard-entry',
  template: `
    <p>dashboard app works!</p>
    <button (click)="logout()")>Logout</button>
  `,
})
export class RemoteEntryComponent {
  private authService = inject(AuthService);
  logout() {
    this.authService.logout();
  }
}
