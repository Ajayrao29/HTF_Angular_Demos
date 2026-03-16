import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NameService } from '../../services/name-service/name-service';

@Component({
  selector: 'app-edit-name',
  imports: [FormsModule],
  templateUrl: './edit-name.html',
  styleUrl: './edit-name.css'
})
export class EditName implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly nService = inject(NameService);

  private index = -1;
  name = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const index = paramMap.get('index');
      this.index = index ? Number(index) : -1;
      this.name = this.nService.getByIndex(this.index);
    });
  }

  updateName(): void {
    this.nService.updateName(this.index, this.name);
    this.router.navigate(['/names/show']);
  }

  cancel(): void {
    this.router.navigate(['/names/show']);
  }
}
