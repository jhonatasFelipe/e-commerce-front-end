import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";
import { catchError, map, of } from "rxjs";


export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isLoged().pipe(
    map(() => true),
    catchError(() =>{
      return of(router.parseUrl('/login'));
    })
  );
};

