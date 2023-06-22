import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: ` <input
    [ngModel]="searchValue"
    (ngModelChange)="searchValueChange.emit($event)"
    class="search-bar"
    type="search"
    placeholder="Type something to filter tasks..."
  />`,
})
export class SearchBarComponent {
  @Input() public searchValue: string = '';
  @Output() public searchValueChange: EventEmitter<string> =
    new EventEmitter<string>();
}
