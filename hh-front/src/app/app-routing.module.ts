// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component'; // Импортируем компонент

const routes: Routes = [
  { path: 'companies', component: CompanyListComponent },
  { path: '', redirectTo: '/companies', pathMatch: 'full' }, // Маршрут по умолчанию
  // Добавьте другие маршруты по мере необходимости
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
