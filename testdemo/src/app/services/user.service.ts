import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUser(): User {
    return { id: 1, name: 'Alice' };
  }
}
