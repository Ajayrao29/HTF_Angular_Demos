import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form1',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form1.html',
  styleUrl: './reactive-form1.css',
})
export class ReactiveForm1 implements OnInit {
  profileForm!: FormGroup;

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    // You can access the data directly via the form object
    console.log(this.profileForm.value);
  }
}
