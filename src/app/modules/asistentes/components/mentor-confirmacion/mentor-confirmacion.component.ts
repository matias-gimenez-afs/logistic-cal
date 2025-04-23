import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-mentor-confirmacion',
  templateUrl: './mentor-confirmacion.component.html',
  styleUrls: ['./mentor-confirmacion.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
  ],
})
export class MentorConfirmacionComponent implements OnInit {
  participantes: Participante[] = [];
  mentoresDisponibles: string[] = [
    'Mauro Acosta',
    'Micaela Arcelus',
    'Federico Jaime',
    'Candelaria Martinez',
    'Julia Taleisnik',
  ];

  evFilter = new FormControl('');
  mentorFilter = new FormControl('');
  estadoFilter = new FormControl('');

  filteredParticipantes: Participante[] = [];
  displayedColumns: string[] = [
    'ev',
    'nombre',
    'apellido',
    'mentor',
    'notasMentor',
    'confirmado',
  ];

  ngOnInit(): void {
    this.cargarDatosIniciales();
    this.configurarFiltros();
  }

  private cargarDatosIniciales(): void {
    this.participantes = [
      {
        ev: 'EV01',
        nombre: 'Juan',
        apellido: 'Pérez',
        mentor: 'Mauro Acosta',
        notasMentor: 'Muy activo',
        confirmado: false,
      },
      {
        ev: 'EV02',
        nombre: 'Ana',
        apellido: 'López',
        mentor: 'Micaela Arcelus',
        notasMentor: '',
        confirmado: true,
      },
    ];
    this.filteredParticipantes = [...this.participantes];
  }

  private configurarFiltros(): void {
    this.evFilter.valueChanges.subscribe(() => this.aplicarFiltros());
    this.mentorFilter.valueChanges.subscribe(() => this.aplicarFiltros());
    this.estadoFilter.valueChanges.subscribe(() => this.aplicarFiltros());
  }

  aplicarFiltros(): void {
    const evValue = this.evFilter.value?.toLowerCase() || '';
    const mentorValue = this.mentorFilter.value || '';
    const estadoValue = this.estadoFilter.value;

    this.filteredParticipantes = this.participantes.filter((p) => {
      const matchEV = p.ev.toLowerCase().includes(evValue);
      const matchMentor = mentorValue ? p.mentor === mentorValue : true;
      const matchEstado =
        estadoValue === 'confirmado'
          ? p.confirmado
          : estadoValue === 'no-confirmado'
          ? !p.confirmado
          : true;

      return matchEV && matchMentor && matchEstado;
    });
  }

  actualizarMentor(participante: Participante): void {
    // Lógica para guardar automáticamente, por ahora solo console.log
    console.log(`Nuevo mentor para ${participante.nombre}: ${participante.mentor}`);
  }
 
  actualizarConfirmacion(
    participante: Participante,
    confirmado: boolean
  ): void {
    participante.confirmado = confirmado;
    // Podés agregar lógica de guardado aquí
  }
}




interface Participante {
  ev: string;
  nombre: string;
  apellido: string;
  mentor: string;
  notasMentor: string;
  confirmado: boolean;
}
