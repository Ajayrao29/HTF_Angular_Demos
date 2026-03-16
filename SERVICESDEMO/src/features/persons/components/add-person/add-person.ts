import { Component, inject } from '@angular/core';
import { PersonsService } from '../../services/persons-service/persons-service';

@Component({
  selector: 'app-add-person',
  imports: [],
  templateUrl: './add-person.html'
})
export class AddPerson {
  private readonly personsService = inject(PersonsService);

  addPerson(personInput: HTMLInputElement): void {
    this.personsService.add(personInput.value); 
    personInput.value = '';
  }
}




