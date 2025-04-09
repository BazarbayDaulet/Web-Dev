// src/app/company.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company, Vacancy } from './models'; // Импортируем интерфейсы

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl = 'http://127.0.0.1:8000/api'; // Измените, если ваш бэкенд работает по другому адресу

  constructor(private http: HttpClient) { }

  // Получить все компании
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/companies/`);
  }

  // Получить вакансии для конкретной компании
  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}/companies/${companyId}/vacancies/`);
  }

  // --- Добавьте другие методы по мере необходимости (getCompany, createCompany, updateCompany, deleteCompany, getVacancy, и т.д.) ---
  // Пример:
  // getCompany(id: number): Observable<Company> {
  //   return this.http.get<Company>(`${this.baseUrl}/companies/${id}/`);
  // }
}
