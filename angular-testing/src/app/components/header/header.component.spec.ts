import { TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";

describe('HeaderComponent', () => {
  it('should contain the title', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toBe('To-Do List App');
  });
});