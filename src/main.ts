import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from "@angular/http";
import { enableProdMode } from '@angular/core';
import { CareerStartupAppComponent, environment } from './app/';
import { CookieService } from 'angular2-cookie/core';
import { AuthService } from './app/auth/auth.service';

import 'rxjs/add/operator/map';

if (environment.production) {
  enableProdMode();
}

bootstrap(CareerStartupAppComponent,[ROUTER_PROVIDERS, HTTP_PROVIDERS, AuthService, CookieService]);
