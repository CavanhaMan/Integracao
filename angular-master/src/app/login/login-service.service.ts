import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable()
export class LoginServiceService {

  public showNavbarEmmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private authenticated = false;

  constructor(private router: Router) { }

  signIn(user: User) {
    if ((user.email === 'user@email.com' || user.email === 'usuario@email.com' || user.email === '1') && user.password === '123456' || user.password === '1') {
      this.authenticated = true;
      this.showNavBar(true);
      this.router.navigate(['/']);
    }
    else {
      this.authenticated = false;
    }
  }

  logout() {
    this.authenticated = false;
    this.showNavBar(false);
    this.router.navigate(['/signin']);
  }

  isAuthenticated() {
    return this.authenticated;
  }

  private showNavBar(ifShow: boolean) {
    this.showNavbarEmmitter.emit(ifShow);
  }
}
