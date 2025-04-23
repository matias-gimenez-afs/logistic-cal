import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Participante {
  nombre: string;
  apellido: string;
  rol: string;
  importePorPersona: number;
}

interface EVData {
  ev: string;
  totalTransferir: number;
  estadoTransferencia: 
    | 'Transferencia solicitada'
    | 'Transferencia programada'
    | 'Transferencia realizada';
  participantes: Participante[];
  expanded: boolean;
}

@Component({
  standalone: true,
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class FinanzasComponent {
  evData: EVData[] = [
    {
      ev: 'RED',
      totalTransferir: 600000,
      estadoTransferencia: 'Transferencia solicitada',
      participantes: [
        {
          nombre: 'Maria',
          apellido: 'Luna',
          rol: 'Presidente',
          importePorPersona: 100000,
        },
        {
          nombre: 'Manuel Eduardo',
          apellido: 'Corcuera',
          rol: 'C. Hosting',
          importePorPersona: 100000,
        },
      ],
      expanded: false,
    },
    {
      ev: 'TUC',
      totalTransferir: 300000,
      estadoTransferencia: 'Transferencia programada',
      participantes: [
        {
          nombre: 'Juan',
          apellido: 'Pérez',
          rol: 'Otro',
          importePorPersona: 100000,
        },
      ],
      expanded: false,
    },
  ];

  filtroEV: string = '';
  filtroEstado: string = '';

  displayedColumns: string[] = [
    'ev',
    'totalTransferir',
    'estadoTransferencia',
    'detalle',
  ];
  detalleColumns: string[] = ['nombre', 'apellido', 'rol', 'importe'];

  filteredData(): EVData[] {
    return this.evData.filter(
      (ev) =>
        (!this.filtroEV ||
          ev.ev.toLowerCase().includes(this.filtroEV.toLowerCase())) &&
        (!this.filtroEstado || ev.estadoTransferencia === this.filtroEstado)
    );
  }

  toggleExpand(ev: EVData) {
    ev.expanded = !ev.expanded;
  }

  cambiarEstado(ev: EVData, nuevoEstado: EVData['estadoTransferencia']) {
    ev.estadoTransferencia = nuevoEstado;
  }
}