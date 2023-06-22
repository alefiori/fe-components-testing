import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: ` <header class="header header--angular">
    <h1 class="header__title">To-Do List App</h1>
  </header>`,
})
export class HeaderComponent {}
