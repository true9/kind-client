import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { environment as e } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    gtag('config', e.analytics.trackingId);
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          // @ts-ignore
          window.ga('set', 'page', event.urlAfterRedirects);
          // @ts-ignore
          window.ga('send', 'pageview');
        }
      }
    );
  }
}
