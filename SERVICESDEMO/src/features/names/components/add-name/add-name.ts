import { Component, inject } from '@angular/core';
import { NameService } from '../../services/name-service/name-service';

@Component({
  selector: 'app-add-name',
  imports: [],
  templateUrl: './add-name.html',
  styleUrl: './add-name.css'
})
export class AddName {
  private readonly nameService = inject(NameService);

  addName(nameInput: HTMLInputElement): void {
    this.nameService.add(nameInput.value);
    nameInput.value = '';
  }
}
