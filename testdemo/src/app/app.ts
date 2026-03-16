import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HelloComponent } from './components/hello-component1/hello-component';
import { CounterComponent } from './components/counter/counter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent, CounterComponent, DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testdemo');
}
