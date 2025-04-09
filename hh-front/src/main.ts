import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

import { CompanyListComponent } from './app/company-list/company-list.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'companies', component: CompanyListComponent },
      { path: '', redirectTo: '/companies', pathMatch: 'full' }
    ]),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
