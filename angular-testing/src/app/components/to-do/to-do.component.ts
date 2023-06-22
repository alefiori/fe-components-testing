import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule],
  template: `<div
    ngClass="todo {{ completed ? 'todo--checked' : '' }}"
    (click)="completed = !completed"
  >
    <p class="todo__title">{{ title }}</p>
  </div>`,
})
export class ToDoComponent {
  @Input() public completed: boolean = false;
  @Input() public title: string = '';
}
