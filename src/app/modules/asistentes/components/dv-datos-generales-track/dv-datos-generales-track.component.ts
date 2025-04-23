import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

interface Participante {
  nombre: string;
  apellido: string;
  ev: string;
  rol: string;
  track: string;
  subtrack: string;
}

@Component({
  selector: 'app-dv-datos-generales-track',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule
  ],
  templateUrl: './dv-datos-generales-track.component.html',
  styleUrl: './dv-datos-generales-track.component.css'
})
export class DvDatosGeneralesTrackComponent {
  // Datos de ejemplo
  dataOriginal: Participante[] = [
    { nombre: 'Agustina', apellido: 'De Llac', ev: 'AFA', rol: 'Voluntario', track: 'HOSTING', subtrack: 'A' },
    { nombre: 'Arantxa', apellido: 'Salvat Diaz', ev: 'AFA', rol: 'C. Sending', track: 'SENDING', subtrack: '-' },
    { nombre: 'Roxana', apellido: 'Díaz', ev: 'AFA', rol: 'C. Hosting', track: 'HOSTING', subtrack: 'A' },
    { nombre: 'Silvana', apellido: 'Morales', ev: 'AFA', rol: 'C. Educativo Local', track: 'COM. EDUCATIVAS', subtrack: 'B' },
    { nombre: 'Silvia', apellido: 'Mendez', ev: 'AFA', rol: 'Presidente', track: 'PRESIDENTE', subtrack: '-' },
    { nombre: 'Florencia', apellido: 'Ruiz', ev: 'BCR', rol: 'C. Sending', track: 'SENDING', subtrack: '-' },
    { nombre: 'María', apellido: 'Martínez Infante', ev: 'BCR', rol: 'C. Educativo Local', track: 'COM. EDUCATIVAS', subtrack: 'B' },
    { nombre: 'Nicolás', apellido: 'Florez', ev: 'BCR', rol: 'C. Hosting', track: 'HOSTING', subtrack: 'A' },
    { nombre: 'Andrea', apellido: 'García Fieyra', ev: 'CANELONES', rol: 'Otro', track: 'COM. EDUCATIVAS', subtrack: 'A' },
    { nombre: 'María', apellido: 'Finno Di Donato', ev: 'CANELONES', rol: 'C. Educativo Local', track: 'COM. EDUCATIVAS', subtrack: 'A' }
  ];

  // Filtros activos
  filtroEV = '';
  filtroRol = '';
  filtroTrack = '';

  // Columnas visibles
  columnas = ['ev', 'nombre', 'apellido', 'rol', 'track', 'subtrack'];

  // Dropdown options
  rolesDisponibles = ['Voluntario', 'C. Sending', 'C. Hosting', 'C. Educativo Local', 'Presidente', 'Otro'];
  tracksDisponibles = ['HOSTING', 'SENDING', 'COM. EDUCATIVAS', 'PRESIDENTE'];
  subtracksDisponibles = ['A', 'B', '-'];

  // Filtros automáticos
  get dataFiltrada(): Participante[] {
    return this.dataOriginal.filter(p =>
      (!this.filtroEV || p.ev === this.filtroEV) &&
      (!this.filtroRol || p.rol === this.filtroRol) &&
      (!this.filtroTrack || p.track === this.filtroTrack)
    );
  }

  get evsUnicos(): string[] {
    return [...new Set(this.dataOriginal.map(p => p.ev))];
  }

  get rolesUnicos(): string[] {
    return [...new Set(this.dataOriginal.map(p => p.rol))];
  }

  get tracksUnicos(): string[] {
    return [...new Set(this.dataOriginal.map(p => p.track))];
  }

  guardar(participante: Participante) {
    console.log('Cambios guardados para:', participante);
    // Acá podrías llamar a un servicio para guardar los datos actualizados
  }
}
