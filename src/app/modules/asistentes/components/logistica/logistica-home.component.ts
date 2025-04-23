import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-logistica-home',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './logistica-home.component.html',
  styleUrls: ['./logistica-home.component.css'],
})
export class LogisticaHomeComponent {
  cards = [
    {
      title: 'Traslados',
      icon: 'traslados',
      color: 'logistics',
      route: 'traslados',
    },
    {
      title: 'Hospedaje',
      icon: 'hospedaje',
      color: 'rooming',
      route: 'hospedaje',
    },
    {
      title: 'Necesidades Especiales',
      icon: 'food',
      color: 'health',
      route: 'necesidades',
    },
  ];
}
