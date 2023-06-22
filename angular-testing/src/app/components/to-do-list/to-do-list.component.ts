import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ToDoComponent } from '../to-do/to-do.component';
import { ToDoList } from 'common/dist/types';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, ToDoComponent],
  template: ` <section class="todo-list">
    <h2>List of ToDos</h2>
    <ul class="todo-list__items">
      <li *ngFor="let toDo of filteredToDoList">
        <app-to-do [completed]="toDo.completed" [title]="toDo.todo"></app-to-do>
      </li>
    </ul>
  </section>`,
})
export class ToDoListComponent implements OnChanges {
  @Input() public toDoList: ToDoList = [];
  @Input() public searchValue: string = '';

  public filteredToDoList: ToDoList = [];

  ngOnChanges(): void {
    if (this.searchValue) {
      this.filteredToDoList = this.toDoList.filter(({ todo }) =>
        todo.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    } else {
      this.filteredToDoList = this.toDoList;
    }
  }
}
