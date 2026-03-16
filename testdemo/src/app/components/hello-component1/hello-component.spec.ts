import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello-component';
import { HelloService } from '../../services/hello-service';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;
  let mockHelloService: Partial<HelloService>;

  beforeEach(async () => {
    mockHelloService = {
      sayHello: (name: string) => `Hello, ${name}!`
    };

    await TestBed.configureTestingModule({
      imports: [HelloComponent, FormsModule],
      providers: [
        { provide: HelloService, useValue: mockHelloService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial greeting', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.greeting-message')?.textContent).toBe('Hello, Guest!');
  });

  it('should update greeting when name changes', async () => {
    component.userName.set('Alice');
    component.updateGreeting();
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.greeting-message')?.textContent).toBe('Hello, Alice!');
  });
});
