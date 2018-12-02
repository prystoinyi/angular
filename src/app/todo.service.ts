import { Injectable } from '@angular/core';

import { Todo } from './shared/todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class TodoService {

  private apiUrl = 'api/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl)
                    .pipe(catchError(this.handleError('getTodos', [])));
  }

  getTodo(id: number): Observable<Todo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Todo>(url).pipe(catchError(this.handleError<Todo>(`getHero id=${id}`))
    );
  }

  createTodo(title: string): Observable<Todo> {
    let todo = new Todo(title);
    return this.http.post<Todo>(this.apiUrl, todo, httpOptions)
                    .pipe(catchError(this.handleError<Todo>('createTodo')));
    
  }

  deleteTodo(todo: Todo) {
    let url = `${this.apiUrl}/${todo.id}`;
    return this.http.delete(url, httpOptions)
                    .pipe(catchError(this.handleError('deleteTodo', [])));
  }

  toggleTodo(todo: Todo) {
    let url = `${this.apiUrl}/${todo.id}`;

    return this.http.put(url, todo, httpOptions)
                    .pipe(catchError(this.handleError('toggleTodo', [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
