import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HelloService } from '../../services/hello-service';

@Component({
  selector: 'app-hello-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hello-component.html',
  styleUrl: './hello-component.css'
})
export class HelloComponent implements OnInit {
  userName = signal('Guest');
  greeting = signal('');

  constructor(private helloService: HelloService) {}

  ngOnInit(): void {
    this.updateGreeting();
  }

  updateGreeting(): void {
    this.greeting.set(this.helloService.sayHello(this.userName()));
  }
}
