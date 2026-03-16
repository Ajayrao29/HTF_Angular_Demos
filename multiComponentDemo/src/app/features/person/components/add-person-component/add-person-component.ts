import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-person-component',
  imports: [FormsModule],
  templateUrl: './add-person-component.html',
  styleUrl: './add-person-component.css'
})
export class AddPersonComponent {
  @Output() add = new EventEmitter<{ fname: string; lname: string; age: number }>();
  firstName = '';
  lastName = '';
  age: number | null = null;

  addPerson(): void {
    if (!this.firstName || !this.lastName || this.age === null) {
      return;
    }

    this.add.emit({
      fname: this.firstName,
      lname: this.lastName,
      age: this.age
    });

    this.firstName = '';
    this.lastName = '';
    this.age = null;
  }
}