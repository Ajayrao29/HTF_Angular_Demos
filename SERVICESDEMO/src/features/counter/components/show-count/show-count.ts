import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter-service/counter-service';

@Component({
  selector: 'app-show-count',
  imports: [],
  templateUrl: './show-count.html',
  styleUrl: './show-count.css',
})
export class ShowCount {
  private readonly counterService = inject(CounterService);

  get count(): number {
    return this.counterService.getCount();
  }

  increment(): void {
    this.counterService.increment();
  }

  decrement(): void {
    this.counterService.decrement();
  }

  reset(): void {
    this.counterService.reset();
  }
}
