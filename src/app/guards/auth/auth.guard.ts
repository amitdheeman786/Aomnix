import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage_Keys } from 'src/app/services/storage/storage.keys';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const savedData = this.storage.getSavedData();
    if (savedData) {
      if ((route.routeConfig.path.includes("login") || route.routeConfig.path.includes("forgot-password")) && !savedData[Storage_Keys.token]) {
        return true;
      } else if (savedData[Storage_Keys.token] && route.routeConfig.path.includes("admin")) {
        return true;
      } else if (savedData[Storage_Keys.token] && (route.routeConfig.path.includes("login") || route.routeConfig.path.includes("forgot-password"))) {
        this.router.navigate(['/admin/dashboard']);
        return false;
      } else if ((!savedData[Storage_Keys.token]) && route.routeConfig.path.includes("admin")) {
        this.router.navigate(['login']);
        return false;
      }
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
