import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonsService } from '../../services/persons-service/persons-service';

@Component({
  selector: 'app-edit-person',
  imports: [],
  templateUrl: './edit-person.html',
  styleUrl: './edit-person.css'
})
export class EditPerson implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly personsService = inject(PersonsService);

  private id = -1;

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.id = id ? Number(id) : -1;
    });
  }

  get currentPersonName(): string {
    const person = this.personsService.findById(this.id);
    return person ? person.name : '';
  }

  updatePerson(personInput: HTMLInputElement): void {
    this.personsService.updateById(this.id, personInput.value);
    this.router.navigateByUrl('/persons/show');
  }

  cancel(): void {
    this.router.navigateByUrl('/persons/show');
  }
}
