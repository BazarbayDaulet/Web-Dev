// src/app/company-list/company-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company, Vacancy } from '../models'; // Импортируем интерфейсы
import { Observable, of } from 'rxjs'; // Импортируем 'of' для инициализации selectedCompanyVacancies$
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies$: Observable<Company[]> = of([]); // Инициализируем пустым observable
  selectedCompanyVacancies$: Observable<Vacancy[]> = of([]); // Инициализируем
  selectedCompany: Company | null = null;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companies$ = this.companyService.getCompanies();
  }

  showVacancies(company: Company): void {
    this.selectedCompany = company;
    this.selectedCompanyVacancies$ = this.companyService.getVacanciesByCompany(company.id);
  }
}
