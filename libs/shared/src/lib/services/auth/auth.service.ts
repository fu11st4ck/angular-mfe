import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = signal<boolean>(false);
  private isAdmin = signal<boolean>(false);

  isUserLoggedIn(): boolean {
    return this.isLoggedIn();
  }

  isAdminUser(): boolean {
    return this.isAdmin();
  }

  login(username: string, password: string): boolean {
    if (username === "demo" && password === "demo") {
      this.isLoggedIn.set(true);
      return true;
    } else if (username === "admin" && password === "password") {
      this.isLoggedIn.set(true);
      this.isAdmin.set(true);
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.isLoggedIn.set(false);
    this.isAdmin.set(false);
  }
}
