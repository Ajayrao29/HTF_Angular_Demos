import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Person, PersonsService } from '../../services/persons-service/persons-service';

@Component({
  selector: 'app-show-persons',
  imports: [RouterLink],
  templateUrl: './show-persons.html',
  styleUrl: './show-persons.css'
})
export class ShowPersons {
  private readonly personsService = inject(PersonsService);

  get persons(): Person[] {
    return this.personsService.findall();
  }

  deletePerson(id: number): void {
    this.personsService.delete(id);
  }
}
