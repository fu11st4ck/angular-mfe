import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@ezms/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontend-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './frontend-login.component.html',
  styleUrl: './frontend-login.component.css',
})
export class FrontendLoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required])
  })

  login() {
    const {username, password} = this.loginForm.getRawValue();
    if (this.loginForm.valid && username && password) {
      if (this.authService.login(username, password)) {
        this.router.navigate(['/dashboard'])
      }
    }
  }
}
