import { Component } from '@angular/core';
import { PersonListComponent } from './features/person/components/person-list-component/person-list-component';

@Component({
  selector: 'app-root',
  imports: [PersonListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
