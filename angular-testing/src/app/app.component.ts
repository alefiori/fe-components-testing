import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToDoList } from 'common/dist/types';
import { Observable, map } from 'rxjs';
import { SearchBarComponent, ToDoListComponent } from './components';
import { HeaderComponent } from './components/header/header.component';
import { ApiService } from './services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SearchBarComponent,
    ToDoListComponent,
  ],
  providers: [ApiService],
  template: `<app-header></app-header>
    <main class="content">
      <app-search-bar [(searchValue)]="searchValue"></app-search-bar>
      <app-to-do-list *ngIf="toDoList$ | async as toDoList"
        [searchValue]="searchValue"
        [toDoList]="toDoList"
      ></app-to-do-list>
    </main>`,
})
export class AppComponent {
  public searchValue: string = '';
  public toDoList$: Observable<ToDoList>;

  constructor(apiService: ApiService) {
    this.toDoList$ = apiService.getToDos().pipe(map(({ todos }) => todos));
  }
}
