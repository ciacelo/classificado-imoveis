import { Injectable, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate{
  constructor(@Inject('AuthService') private authService: AuthService, private router: Router){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
}
