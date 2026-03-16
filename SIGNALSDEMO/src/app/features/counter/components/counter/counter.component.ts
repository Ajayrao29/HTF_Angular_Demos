import { Component, computed, inject } from '@angular/core';
import { CounterService } from '../../services/counter-service/counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  private readonly counterService = inject(CounterService);

  readonly count = this.counterService.count;
  readonly doubleCount = computed(() => this.counterService.getCount() * 2);

  increment(): void {
    this.counterService.increment();
  }

  decrement(): void {
    this.counterService.decrement();
  }

  reset(): void {
    this.counterService.reset();
  }

  clear(): void {
    this.counterService.clear();
  }

  getCount() {
    return this.count;
  }
}
