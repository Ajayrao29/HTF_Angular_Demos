import { Component } from '@angular/core';
import { PersonList } from './features/person/components/person-list/person-list';

@Component({
  selector: 'app-root',
  imports: [PersonList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
