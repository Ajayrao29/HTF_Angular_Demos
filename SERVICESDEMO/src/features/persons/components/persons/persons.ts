import { Component, inject } from '@angular/core';
import { Person, PersonsService } from '../../services/persons-service/persons-service';

@Component({
  selector: 'app-persons',
  imports: [],
  templateUrl: './persons.html'
})
export class Persons {
  private readonly personsService = inject(PersonsService);

  get persons(): Person[] {
    return this.personsService.findall();
  }

  addPerson(personInput: HTMLInputElement): void {
    this.personsService.add(personInput.value);
    personInput.value = '';
  }
   
  deletePerson(id: number): void {
    this.personsService.delete(id);
  }

  updatePersonById(id: number, personInput: HTMLInputElement): void {
    this.personsService.updateById(id, personInput.value);
    personInput.value = '';
  }
}


