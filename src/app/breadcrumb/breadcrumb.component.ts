import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, pluck, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  currentPage$: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentPage$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      switchMap(() => {
        return this.activatedRoute.firstChild.data;
      }),
      pluck('title')
    );
  }

}
