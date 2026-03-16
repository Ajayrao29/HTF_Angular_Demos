import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with count 0', () => {
    expect(component.count()).toBe(0);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.count-value')?.textContent).toBe('0');
  });

  it('should increment the count', () => {
    component.increment();
    fixture.detectChanges();
    expect(component.count()).toBe(1);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.count-value')?.textContent).toBe('1');
  });

  it('should decrement the count', () => {
    component.decrement();
    fixture.detectChanges();
    expect(component.count()).toBe(-1);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.count-value')?.textContent).toBe('-1');
  });

  it('should reset the count', () => {
    component.increment();
    component.increment();
    component.reset();
    fixture.detectChanges();
    expect(component.count()).toBe(0);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.count-value')?.textContent).toBe('0');
  });
});
