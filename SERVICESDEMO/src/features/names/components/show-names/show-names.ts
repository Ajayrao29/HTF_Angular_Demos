import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NameService } from '../../services/name-service/name-service';

@Component({
  selector: 'app-show-names',
  imports: [],
  templateUrl: './show-names.html',
  styleUrl: './show-names.css'
})
export class ShowNames {
  private readonly nameService = inject(NameService);
  private readonly router = inject(Router);
  
  get names(): string[] {
    return this.nameService.getAll();
  }

  editName(index: number): void {
    this.router.navigate(['/update', index]);
  }

   removeName(name: string): void {
    this.nameService.remove(name);
  }
}



