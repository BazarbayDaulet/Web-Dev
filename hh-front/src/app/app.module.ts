import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // <-- должен быть правильный путь
import { HttpClientModule } from '@angular/common/http';
import { CompanyListComponent } from './company-list/company-list.component'; // путь по твоей структуре

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

