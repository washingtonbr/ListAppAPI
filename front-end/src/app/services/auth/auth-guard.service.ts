import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  canActivate(): boolean {
    console.log('canActivate', this.authService.isAuthenticated());
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
