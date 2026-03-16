import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NameService } from '../../services/name-service/name-service';

@Component({
  selector: 'app-show-names',
  imports: [],
  templateUrl: './show-names.html',
  styleUrl: './show-names.css'
})
export class ShowNames implements OnInit, OnDestroy {
  private nameService = inject(NameService);
  private namesSubscription?: Subscription;

  names: string[] = [];

  ngOnInit(): void {
    this.namesSubscription = this.nameService.names$.subscribe((names) => {
      this.names = [...names];
    });
  }

  ngOnDestroy(): void {
    this.namesSubscription?.unsubscribe();
  }

  removeName(name: string): void {
    this.nameService.remove(name);
  }
}
