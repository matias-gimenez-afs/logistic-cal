import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-logistica-necesidades',
  templateUrl: './logistica-necesidades.component.html',
  styleUrls: ['./logistica-necesidades.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule, // Añadido para mat-form-field
    MatInputModule,
    MatTableModule, // Para la tabla
    MatCardModule       // Añadido para mat-label y matInput
  ],
})
export class LogisticaNecesidadesComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'ev', 'restricciones', 'condiciones'];

  participantes: any[] = [
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      ev: 'Mendoza',
      restriccionesAlimentarias: 'Vegetariano, sin gluten',
      condicionesMedicas: 'Hipotiroidismo, toma levotiroxina',
    },
    {
      nombre: 'Lucía',
      apellido: 'Gómez',
      ev: 'Córdoba',
      restriccionesAlimentarias: 'Sin lactosa, sin carne de cerdo',
      condicionesMedicas: 'Diabética, insulinodependiente',
    },
    {
      nombre: 'Carlos',
      apellido: 'Martínez',
      ev: 'Rosario',
      restriccionesAlimentarias: 'Sin gluten, sin huevo',
      condicionesMedicas: 'Hipertensión, toma enalapril',
    },
    {
      nombre: 'Ana',
      apellido: 'Ruiz',
      ev: 'Buenos Aires',
      restriccionesAlimentarias: 'Vegana',
      condicionesMedicas: 'Alergia al polen',
    },
  ];

  filtroEv: string = '';
  filtroRestricciones: string = '';
  filtroCondiciones: string = '';

  constructor() {}

  ngOnInit(): void {}

  get participantesFiltrados() {
    return this.participantes.filter((p) => {
      const matchesEv = this.filtroEv
        ? p.ev.toLowerCase().includes(this.filtroEv.toLowerCase())
        : true;
      const matchesRestricciones = this.filtroRestricciones
        ? p.restriccionesAlimentarias
            .toLowerCase()
            .includes(this.filtroRestricciones.toLowerCase())
        : true;
      const matchesCondiciones = this.filtroCondiciones
        ? p.condicionesMedicas
            .toLowerCase()
            .includes(this.filtroCondiciones.toLowerCase())
        : true;

      return matchesEv && matchesRestricciones && matchesCondiciones;
    });
  }

  
}
