import { TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  it('should contain the title', () => {
    const fixture = TestBed.createComponent(SearchBarComponent);
    const input = fixture.nativeElement.querySelector('input');
    expect(input.placeholder).toBe('Type something to filter tasks...');
  });

  //   Testare con un valore mock
  it('should emit the search value', () => {
    const fixture = TestBed.createComponent(SearchBarComponent);
    const component = fixture.componentInstance;
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    spyOn(component.searchValueChange, 'emit');
    fixture.detectChanges();
    input.value = 'test';
    input.dispatchEvent(new Event('input'));

    // TODO come si potrebbe fare
    // input.dispatchEvent(
    //   new CustomEvent('input', { detail: { value: 'test' } })
    // );

    expect(component.searchValueChange.emit).toHaveBeenCalledWith('test');
  });
});
