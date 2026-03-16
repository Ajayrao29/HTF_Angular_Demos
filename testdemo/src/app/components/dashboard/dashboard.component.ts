import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container glass animate-fade-in">
      <h2>Dashboard</h2>
      <p>Welcome, <span class="highlight">{{ username }}</span>!</p>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 30px;
      max-width: 400px;
      margin: 20px auto;
      text-align: center;
    }
    .highlight {
      font-weight: bold;
      color: var(--primary);
      background: linear-gradient(to right, #818cf8, #fb7185);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `]
})
export class DashboardComponent implements OnInit {
  username = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.username = this.userService.getUser().name;
  }
}
