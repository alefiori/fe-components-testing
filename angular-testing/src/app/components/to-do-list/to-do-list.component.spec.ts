import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ToDoListComponent } from './to-do-list.component';

@Component({
  selector: 'app-to-do',
  standalone: true,
  template: `<p>To do</p>`,
})
class ToDoMockComponent {}

describe('Test to do list', () => {
  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [ToDoMockComponent],
    });
  });
  it('Find List of ToDos as Title', () => {
    const componentToDoList = TestBed.createComponent(ToDoListComponent);
    const title = componentToDoList.nativeElement.querySelector('h2');
    expect(title.textContent).toBe('List of ToDos');
  });

  it('How many times todo list print ToDo', () => {
    const fixture = TestBed.createComponent(ToDoListComponent);
    const component = fixture.componentInstance;
    component.toDoList = [];
    const listTodo = fixture.nativeElement.querySelectorAll('p');
    expect(listTodo.length).toBe(0);
  });
});
