import { Component } from '@angular/core';
import { ShowCount } from './features/counter/components/show-count/show-count';
import { Increment } from './features/counter/components/increment/increment';
import { ShowNames } from './features/names/components/show-names/show-names';

@Component({
  selector: 'app-root',
  imports: [Increment, ShowCount, ShowNames],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
