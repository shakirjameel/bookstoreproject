import { Injectable } from '@angular/core';

import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router){

  }

  canActivate() {
    if (this.authService.userLoggedIn()) {
      return true;
    }
    if (this.authService.adminLoggedIn()){
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
