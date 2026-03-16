import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { UserService } from '../../services/user.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const mockUserService = {
    getUser: () => ({
      id: 99,
      name: 'Mockingbird'
    })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        { provide: UserService, useValue: mockUserService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should set username from mock service', () => {
    fixture.detectChanges();
    expect(component.username).toBe('Mockingbird');
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.highlight')?.textContent).toBe('Mockingbird');
  });
});
