import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon'; // Añade esta importación
import { MatButtonModule } from '@angular/material/button'; // Para el botón

interface ParticipanteCertificacion {
  nombre: string;
  apellido: string;
  ev: string;
  foundations: string;
  curso101: string;
  certHosting: string;
  certSending: string;
  seguimientoMails: string;
}

@Component({
  selector: 'app-dv-certificaciones-seguimiento',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule, 
    MatIconModule,   
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './dv-certificaciones-seguimiento.component.html',
  styleUrl: './dv-certificaciones-seguimiento.component.css'
})
export class DvCertificacionesSeguimientoComponent {
  columnas = ['ev', 'nombre', 'apellido', 'foundations', 'curso101', 'certHosting', 'certSending', 'seguimientoMails'];

  estadosCertificacion = ['No iniciado', 'En proceso', 'Finalizado'];
  opcionesSeguimiento = [
    'Mail enviado a la EV',
    'EV Respondió',
    'Se envió segundo email',
    'Se envió confirmación'
  ];

  participantes: ParticipanteCertificacion[] = [
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      ev: 'Buenos Aires',
      foundations: 'Finalizado',
      curso101: 'Finalizado',
      certHosting: 'En proceso',
      certSending: 'No iniciado',
      seguimientoMails: 'EV Respondió'
    },
    {
      nombre: 'María',
      apellido: 'González',
      ev: 'Córdoba',
      foundations: 'En proceso',
      curso101: 'En proceso',
      certHosting: 'No iniciado',
      certSending: 'No iniciado',
      seguimientoMails: 'Mail enviado a la EV'
    }
  ];

  guardar(participante: ParticipanteCertificacion) {
    console.log('Cambios guardados para:', participante);
    // Acá podrías integrar la lógica de guardado en servicio si lo deseas
  }
  // Nuevas propiedades para filtros
  filtroEV: string = '';
  filtroSeguimiento: string = '';
  participantesFiltrados: ParticipanteCertificacion[] = [];

  // Obtener EVs únicas
  get evsUnicas(): string[] {
    return [...new Set(this.participantes.map(p => p.ev))];
  }

  ngOnInit() {
    this.aplicarFiltros(); // Aplicar filtros iniciales
  }

  aplicarFiltros() {
    this.participantesFiltrados = this.participantes.filter(p => {
      const cumpleEV = !this.filtroEV || p.ev === this.filtroEV;
      const cumpleSeguimiento = !this.filtroSeguimiento || p.seguimientoMails === this.filtroSeguimiento;
      return cumpleEV && cumpleSeguimiento;
    });
  }

}
