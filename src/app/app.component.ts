import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuthenticated$ = this.auth.isAuthenticated$;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  logOut() {
    this.auth.logOut()
      .then(() => {
        this.router.navigate(['login']);
      })
      .catch((e) => {
        console.error('Something wrong with logout operation', e);
      });
  }

  constructor(private breakpointObserver: BreakpointObserver,
              private auth: AuthService,
              private router: Router) {}
}
