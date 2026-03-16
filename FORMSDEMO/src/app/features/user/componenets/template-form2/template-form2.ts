import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form2',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form2.html',
  styleUrl: './template-form2.css',
})
export class TemplateForm2 {
  onSubmit(form: NgForm) {
    console.log('Template Form 2 Data:', form.value);
  }
}
