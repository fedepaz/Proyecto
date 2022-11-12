import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (this.loginService.estaLogin()) {
      return true;
    } else {
      window.alert("Acceso denegado brooklyn!");
      return this.router.navigate(['login']).then(() => false);;
    }
  }
}
