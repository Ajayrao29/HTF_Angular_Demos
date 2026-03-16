import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private names: string[] = ['Ajay', 'Ravi', 'Sita'];

  add(name: string): void {
    const value = name.trim();
    if (!value) {
      return;
    }

    this.names.push(value);
  }

  remove(name: string): void {
    const value = name.trim();
    this.names = this.names.filter((currentName) => currentName !== value);
  } 
    
  updateName(index: number, newName: string): void {
    const value = newName.trim();
    if (index >= 0 && index < this.names.length) {
      this.names[index] = value;
    } else {
      throw new Error('invalid syntax');
    }
  }

  getByIndex(index: number): string {
    if (index < 0 || index >= this.names.length) {
      return '';
    }
    return this.names[index];
  } 

  getAll(): string[] {
    return [...this.names];
  }

}

