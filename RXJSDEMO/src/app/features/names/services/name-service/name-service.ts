import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NameService {
  private namesSubject = new BehaviorSubject<string[]>(['Ajay Rao', 'Sachin Tendulkar', 'Rahul Dravid']);
  names$: Observable<string[]> = this.namesSubject.asObservable().pipe(
    map((names) => [...names])
  );

  getAll(): string[] {
    return [...this.namesSubject.value];
  }

  add(name: string): void {
    const value = name.trim();
    if (!value) {
      return;
    }

    this.namesSubject.next([...this.namesSubject.value, value]);
  }

  remove(name: string): void {
    const value = name.trim();
    this.namesSubject.next(this.namesSubject.value.filter((currentName) => currentName !== value));
  }
}
