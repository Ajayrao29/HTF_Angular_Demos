import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person-component',
  templateUrl: './person-component.html',
  styleUrl: './person-component.css'
})
export class PersonComponent {
  @Input() person:{ id: number; fname: string; lname: string; age: number }={
    id: 0,
    fname: '',
    lname: '',
    age: 0
  };

  @Output() remove = new EventEmitter<number>();

  removePerson(): void {
    this.remove.emit(this.person.id);
  }
}

