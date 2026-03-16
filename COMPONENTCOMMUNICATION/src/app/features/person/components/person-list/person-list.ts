import { Component } from '@angular/core';

@Component({
  selector: 'app-person-list',
  imports: [],
  templateUrl: './person-list.html',
  styleUrl: './person-list.css',
})
export class PersonList {
  people: { id: number; fname: string; lname: string; age: number }[] = [
    { id: 1, fname: 'Sachin', lname: 'Tendulkar', age: 30 },
    { id: 2, fname: 'Saurav', lname: 'Ganguly', age: 25 },
    { id: 3, fname: 'Rahul', lname: 'Dravid', age: 40 }
  ];
}