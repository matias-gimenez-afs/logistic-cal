import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Observable, startWith, map, of } from 'rxjs';

interface Participante {
  nombre: string;
  apellido: string;
  ev: string;
  traslado: 'BUS' | 'AVIÓN' | 'Transporte propio';
  estadoCompra: string;
  envioFormularioAuto?: 'Sí' | 'No'; // opcional por ahora
}

@Component({
  standalone: true,
  selector: 'app-logistica-traslados',
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './logistica-traslados.component.html',
  styleUrls: ['./logistica-traslados.component.css'],
})
export class LogisticaTrasladosComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'ev',
    'traslado',
    'estadoCompra',
    'formularioAuto',
  ];
  dataSource: Participante[] = [];

  // FILTROS
  filtros = {
    ev: '',
    traslado: '',
    estadoCompra: '',
    envioFormularioAuto: '',
  };

  // Para el autocomplete de EV
  evControl = new FormControl('');
  evOptions: string[] = [];
  filteredEVs: Observable<string[]> = of([]);

  ngOnInit(): void {
    // Datos simulados
    this.dataSource = [
      {
        nombre: 'Sofía',
        apellido: 'Pérez',
        ev: 'Santa Fe',
        traslado: 'AVIÓN',
        estadoCompra: 'compra_pasaje_pendiente',
      },
      {
        nombre: 'Juan',
        apellido: 'López',
        ev: 'Santa Rosa',
        traslado: 'BUS',
        estadoCompra: 'pedido_transferencia',
      },
      {
        nombre: 'Camila',
        apellido: 'Gómez',
        ev: 'Mendoza',
        traslado: 'BUS',
        estadoCompra: 'transferencia_realizada',
      },
      {
        nombre: 'Lautaro',
        apellido: 'Martínez',
        ev: 'Rosario',
        traslado: 'Transporte propio',
        estadoCompra: 'transferencia_realizada',
        envioFormularioAuto: 'Sí',
      },
    ];

    // Opciones únicas de EV
    this.evOptions = [...new Set(this.dataSource.map((p) => p.ev))];

    // Filtrado dinámico para autocomplete
    this.filteredEVs = this.evControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filtrarEVs(value || ''))
    );

    // Sincronizar EV con el filtro general
    this.evControl.valueChanges.subscribe((value) => {
      this.filtros.ev = value || '';
    });
  }

  private _filtrarEVs(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.evOptions.filter((ev) =>
      ev.toLowerCase().includes(filterValue)
    );
  }

  get dataFiltrada(): Participante[] {
    return this.dataSource.filter(
      (p) =>
        (!this.filtros.ev ||
          p.ev.toLowerCase().includes(this.filtros.ev.toLowerCase())) &&
        (!this.filtros.traslado || p.traslado === this.filtros.traslado) &&
        (!this.filtros.estadoCompra ||
          p.estadoCompra === this.filtros.estadoCompra) &&
        (!this.filtros.envioFormularioAuto ||
          p.envioFormularioAuto === this.filtros.envioFormularioAuto)
    );
  }
}
