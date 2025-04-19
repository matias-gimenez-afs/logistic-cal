import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dv-home',
  imports: [CommonModule, RouterModule, MatCardModule],
  templateUrl: './dv-home.component.html',
  styleUrls: ['./dv-home.component.css'],
})
export class DvHomeComponent {
  cards = [
    {
      title: 'Datos generales y track',
      icon: 'info',
      color: 'datos-track',
      route: '/dv-home/datos',
    },
    {
      title: 'Certificaciones y seguimiento',
      icon: 'assignment',
      color: 'certificaciones',
      route: '/dv-home/certificaciones',
    },
    {
      title: 'Mentor y confirmación',
      icon: 'mail',
      color: 'mentor-confirmacion',
      route: '/dv-home/mentor',
    },
  ];

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
