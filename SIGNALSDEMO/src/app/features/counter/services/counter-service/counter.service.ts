import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private readonly _count = signal(0);

  readonly count = this._count.asReadonly();

  increment(): void {
    this._count.update((currentValue) => currentValue + 1);
  }

  decrement(): void {
    this._count.update((currentValue) => currentValue - 1);
  }

  reset(): void {
    this.clear();
  }

  clear(): void {
    this._count.set(0);
  }

  getCount(): number {
    return this.count();
  }
}
