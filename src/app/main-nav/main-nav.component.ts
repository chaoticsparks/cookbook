import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Cats {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  cats: Cats[] = [
    {value: 'steak-1', viewValue: 'Завтраки'},
    {value: 'steak-2', viewValue: 'Первые блюда'},
    {value: 'pizza-1', viewValue: 'Вторые блюда'},
    {value: 'tacos-2', viewValue: 'Выпечка'},
    {value: 'tacos-4', viewValue: 'Десерты'},
  ];
  constructor(private breakpointObserver: BreakpointObserver) {}

}
