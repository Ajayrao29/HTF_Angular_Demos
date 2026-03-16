import { Component } from '@angular/core';
import { TemplateForm1 } from './features/user/componenets/template-from1/template-from1';
import { TemplateForm2 } from './features/user/componenets/template-form2/template-form2';
import { ReactiveForm1 } from './features/user/componenets/reactive-form1/reactive-form1';

@Component({
  selector: 'app-root',
  imports: [TemplateForm1, TemplateForm2, ReactiveForm1],
  template: `
    <h2 class="text-center text-xl font-semibold mt-6">Template Form 1</h2>
    <app-template-form1></app-template-form1>

    <h2 class="text-center text-xl font-semibold mt-8">Template Form 2</h2>
    <app-template-form2></app-template-form2>

    <h2 class="text-center text-xl font-semibold mt-8">Reactive Form 1</h2>
    <app-reactive-form1></app-reactive-form1>
  `,
  styleUrl: './app.css'
})
export class App {}
