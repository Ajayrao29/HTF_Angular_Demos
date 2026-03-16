import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form1',
  imports: [FormsModule],
  templateUrl: './template-from1.html',
  styleUrl: './template-from1.css',
})
export class TemplateForm1 {
  onSubmit(form: NgForm) {
    console.log('Form Data:', form.value);
    //here we will make httpClient request to login url and pass form.value as body of the request.
  }
}
