import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  cards = [
    {
      title: 'Gestión DV',
      icon: 'gestionDV',
      color: 'management',
      route: '/dv-home',
    },
    {
      title: 'Logística',
      icon: 'airplane',
      color: 'logistics',
      route: '/logistica',
    },
    {
      title: 'Finanzas',
      icon: 'handshake',
      color: 'finance',
      route: '/finanzas',
    },
  ];
}
