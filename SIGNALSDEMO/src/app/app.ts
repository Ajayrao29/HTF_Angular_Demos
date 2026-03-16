import { Component } from '@angular/core';
import { CounterComponent } from './features/counter/components/counter/counter.component';
import { PersonComponent } from './features/person/components/person/person.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, PersonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
