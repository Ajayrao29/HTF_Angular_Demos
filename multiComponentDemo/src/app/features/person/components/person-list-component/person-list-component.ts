import { Component } from '@angular/core';
import { PersonComponent } from '../person-component/person-component';
import { AddPersonComponent } from '../add-person-component/add-person-component';

@Component({
  selector: 'app-person-list-component',
  imports: [PersonComponent, AddPersonComponent],
  templateUrl: './person-list-component.html',
  styleUrl: './person-list-component.css'
})
export class PersonListComponent {
  names: { id: number; fname: string; lname: string; age: number }[] = [
    { id: 1, fname: 'Sachin', lname: 'Tendulkar', age: 30 },
    { id: 2, fname: 'Saurav', lname: 'Ganguly', age: 25 },
    { id: 3, fname: 'Rahul', lname: 'Dravid', age: 40 }
  ];

  removePerson(personId: number): void {
    this.names = this.names.filter((name) => name.id !== personId);
  }

  addPerson(person: { fname: string; lname: string; age: number }): void {
    this.names.push({
      id: this.names.length + 1,
      fname: person.fname,
      lname: person.lname,
      age: person.age
    });
  }
}
