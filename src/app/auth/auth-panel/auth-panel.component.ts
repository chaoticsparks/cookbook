import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../auth.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-auth-panel',
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.scss']
})
export class AuthPanelComponent implements OnInit {

  @Output() logout = new EventEmitter<boolean>();

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

  emitLogout() {
    this.logout.emit(true);
  }

}
