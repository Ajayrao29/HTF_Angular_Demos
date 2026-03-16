import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  sayHello(name: string): string {
    return `Hello, ${name}!`;
  }
}