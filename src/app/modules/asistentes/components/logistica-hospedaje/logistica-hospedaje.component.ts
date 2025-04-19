import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

interface Participante {
  nombre: string;
  apellido: string;
  rol: string;
  edad: number;
  genero: 'Masculino' | 'Femenino';
  hospedajeAsignado: string;
  numeroHabitacion: string;
}

@Component({
  standalone: true,
  selector: 'app-logistica-hospedaje',
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
  ],
  templateUrl: './logistica-hospedaje.component.html',
  styleUrls: ['./logistica-hospedaje.component.css'],
})
export class LogisticaHospedajeComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'rol',
    'edad',
    'genero',
    'hospedajeAsignado',
    'numeroHabitacion',
  ];

  dataSource: Participante[] = [];

  filtros = {
    rol: '',
    edadMin: '',
    edadMax: '',
    genero: '',
    hospedajeAsignado: '',
    numeroHabitacion: '',
  };

  ordenarPrimeroPor: 'rol' | 'edad' = 'rol';

  ngOnInit(): void {
    this.dataSource = [
      {
        nombre: 'Laura',
        apellido: 'Fernández',
        rol: 'Participante',
        edad: 19,
        genero: 'Femenino',
        hospedajeAsignado: 'QC',
        numeroHabitacion: '102A',
      },
      {
        nombre: 'Marcos',
        apellido: 'Gómez',
        rol: 'Staff',
        edad: 24,
        genero: 'Masculino',
        hospedajeAsignado: 'Sussex',
        numeroHabitacion: '',
      },
      {
        nombre: 'Ana',
        apellido: 'Ruiz',
        rol: 'Participante',
        edad: 27,
        genero: 'Femenino',
        hospedajeAsignado: 'Otro',
        numeroHabitacion: '',
      },
    ];

    this.filtros.edadMin = '17';
    this.filtros.edadMax = '99';
  }

  get dataFiltradaOrdenada(): Participante[] {
    let filtrados = this.dataSource.filter((p) => {
      const edadMin = this.filtros.edadMin ? +this.filtros.edadMin : null;
      const edadMax = this.filtros.edadMax ? +this.filtros.edadMax : null;

      return (
        (!this.filtros.rol || p.rol === this.filtros.rol) &&
        (!this.filtros.genero || p.genero === this.filtros.genero) &&
        (!edadMin || p.edad >= edadMin) &&
        (!edadMax || p.edad <= edadMax) &&
        (!this.filtros.hospedajeAsignado ||
          p.hospedajeAsignado === this.filtros.hospedajeAsignado) &&
        (!this.filtros.numeroHabitacion ||
          (this.filtros.numeroHabitacion === 'asignado' &&
            p.numeroHabitacion) ||
          (this.filtros.numeroHabitacion === 'vacio' && !p.numeroHabitacion))
      );
    });

    const primario = this.ordenarPrimeroPor;
    const secundario = primario === 'rol' ? 'edad' : 'rol';

    return filtrados.sort((a, b) => {
      if (a[primario] < b[primario]) return -1;
      if (a[primario] > b[primario]) return 1;

      if (a[secundario] < b[secundario]) return -1;
      if (a[secundario] > b[secundario]) return 1;

      return 0;
    });
  }
}
