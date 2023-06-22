import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoResponse } from 'common/dist/types';

@Injectable()
export class ApiService {
  constructor(private readonly httpClient: HttpClient) {}

  public getToDos = (): Observable<ToDoResponse> =>
    this.httpClient.get<ToDoResponse>(TODOS_API_URL);
}

const TODOS_API_URL = 'https://dummyjson.com/todos';
