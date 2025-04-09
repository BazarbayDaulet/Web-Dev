// src/app/models.ts

export interface Company {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
}

export interface Vacancy {
  id: number;
  name: string;
  description: string;
  salary: number;
  company: Company; // Отражает вложенную структуру из VacancySerializerManual для чтения
}

// Интерфейс для создания/обновления вакансий, если структура отличается
// export interface VacancyPayload {
//   name: string;
//   description: string;
//   salary: number;
//   company_id: number;
// }
