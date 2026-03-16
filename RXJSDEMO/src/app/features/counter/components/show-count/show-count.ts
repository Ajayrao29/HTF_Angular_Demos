import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../../services/counter-service/counter-service';

@Component({
  selector: 'app-show-count',   
  imports: [],
  templateUrl: './show-count.html',
  styleUrl: './show-count.css'
})
export class ShowCount implements OnInit, OnDestroy {

  private counterService = inject(CounterService);
  private countSubscription?: Subscription;
  count = 0;

  ngOnInit(): void {
    this.countSubscription = this.counterService.count$.subscribe((value) => {
      this.count = value;
    });
  }

  ngOnDestroy(): void {
    this.countSubscription?.unsubscribe();
  }
}


