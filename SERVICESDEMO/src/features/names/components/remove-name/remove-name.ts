import { Component, inject } from '@angular/core';
import { NameService } from '../../services/name-service/name-service';

@Component({
  selector: 'app-remove-name',
  imports: [],
  templateUrl: './remove-name.html',
  styleUrl: './remove-name.css'
})
export class RemoveName {
  private readonly nameService = inject(NameService);

  removeName(nameInput: HTMLInputElement): void {
    this.nameService.remove(nameInput.value);
    nameInput.value = '';
  }
}
