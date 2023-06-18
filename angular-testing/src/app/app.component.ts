import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Angular Application</h1>`,
})
export class AppComponent {}
