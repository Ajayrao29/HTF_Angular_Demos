import { Component, inject } from '@angular/core';
import { PersonService } from '../../services/person-service/person.service';

@Component({
  selector: 'app-person',
  standalone: true,
  templateUrl: './person.component.html'
})
export class PersonComponent {
  private readonly personService = inject(PersonService);

  readonly persons = this.personService.persons;

  addPerson(name: string): void {
    this.personService.addPerson(name);
  }

  removePerson(index: number): void {
    this.personService.removePerson(index);
  }
}
