import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter-service/counter-service';

@Component({
  selector: 'app-increment',
  imports: [],
  templateUrl: './increment.html',
  styleUrl: './increment.css',
})
export class Increment {
  private readonly counterService = inject(CounterService);

  increment(): void {
    this.counterService.increment();
  }
}


