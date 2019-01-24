import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      {
        id: 1,
        title: 'Изучить JavaScript',
        completed: false
      },
      {
        id: 2,
        title: 'Изучить Angular 2',
        completed: false
      },
      {
        id: 3,
        title: 'Написать приложение',
        completed: false
      },
    ];
    return { todos };
  }
}
