import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login/login-service.service';
import { ObservableInput } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private showNavBar: boolean = false;

  constructor(
    private authService: LoginServiceService
  ) { }

  ngOnInit() {
    this.authService.showNavbarEmmitter.subscribe(
      (mode: boolean) => {
        if (mode !== null) {
          this.showNavBar = mode;
        }
      }
    );
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }

  // title = 'Integracao Angular 2';
}