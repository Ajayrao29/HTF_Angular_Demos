import { Injectable } from '@angular/core';

export interface Person {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private persons: Person[] = [];
  private nextId = 1;

  add(person: string): void {
    const value = person.trim();
    if (!value) {
      return;
    }

    this.persons.push({
      id: this.nextId,
      name: value
    });

    this.nextId += 1;
  }

  delete(id: number): void {
    this.persons = this.persons.filter((currentPerson) => currentPerson.id !== id);
  }

  updateById(id: number, person: string): void {
    const value = person.trim();
    if (!value) {
      return;
    }

    this.persons = this.persons.map((currentPerson) => {
      if (currentPerson.id === id) {
        return {
          ...currentPerson,
          name: value
        };
      }

      return currentPerson;
    });
  }   
               
  findById(id: number): Person | undefined {
    return this.persons.find((person) => person.id === id);
  }

  findall(): Person[] {
    return [...this.persons];
  }
}



