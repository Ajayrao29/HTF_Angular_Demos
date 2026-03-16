import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { HelloService } from './hello-service';

describe('HelloService', () => {
  let service: HelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct greeting message', () => {
    const name = 'Alice';
    const expectedMessage = `Hello, ${name}!`;
    const actualMessage = service.sayHello(name);
    expect(actualMessage).toBe(expectedMessage);
  });
});