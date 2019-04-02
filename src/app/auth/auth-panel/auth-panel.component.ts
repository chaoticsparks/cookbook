import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-auth-panel',
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.scss']
})
export class AuthPanelComponent implements OnInit {

  constructor(private auth: AuthService) { }

  isUserDataFetched = false;

  isAuthenticated$ = this.auth.isAuthenticated$
    .pipe(
      tap(() => {
        this.isUserDataFetched = true;
      })
    );

  ngOnInit() {
  }

}
