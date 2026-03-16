import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('add()', () => {
    it('should correctly add two positive numbers', () => {
      expect(service.add(2, 3)).toBe(5);
    });

    it('should correctly add a negative and a positive number', () => {
      expect(service.add(-2, 3)).toBe(1);
    });
  });

  describe('subtract()', () => {
    it('should correctly subtract two numbers', () => {
      expect(service.subtract(5, 3)).toBe(2);
    });

    it('should result in a negative number when subtracting a larger number', () => {
      expect(service.subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply()', () => {
    it('should correctly multiply two numbers', () => {
      expect(service.multiply(2, 4)).toBe(8);
    });

    it('should result in zero when multiplying by zero', () => {
      expect(service.multiply(10, 0)).toBe(0);
    });
  });

  describe('divide()', () => {
    it('should correctly divide two numbers', () => {
      expect(service.divide(10, 2)).toBe(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => service.divide(10, 0)).toThrow('Division by zero is not allowed.');
    });
  });
});
