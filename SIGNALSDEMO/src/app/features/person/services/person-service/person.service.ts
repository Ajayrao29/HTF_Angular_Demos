import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private _persons = signal<string[]>(['Ajay','Vijay','Ravi']);

  persons = this._persons.asReadonly();

  addPerson(name: string): void {
    if (!name) {
      return;
    }

    this._persons.update((currentPersons) => {
      const clonedPersons = [...currentPersons];
      clonedPersons.push(name);
      return clonedPersons;
    });
  }

  removePerson(index: number): void {
    this._persons.update((currentPersons) => {
      if (index < 0 || index >= currentPersons.length) {
        return currentPersons;
      }

      const clonedPersons = [...currentPersons];
      clonedPersons.splice(index, 1);
      return clonedPersons;
    });
  }
}
