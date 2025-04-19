import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/asistentes/components/dashboard/dashboard.component';
import { LoginComponent } from './modules/asistentes/components/login/login.component';
import { DvHomeComponent } from './modules/asistentes/components/dv-home/dv-home.component';
import { LogisticaHomeComponent } from './modules/asistentes/components/logistica/logistica-home.component';
import { LogisticaTrasladosComponent } from './modules/asistentes/components/logistica-traslados/logistica-traslados.component';
import { LogisticaHospedajeComponent } from './modules/asistentes/components/logistica-hospedaje/logistica-hospedaje.component';
import { LogisticaNecesidadesComponent } from './modules/asistentes/components/logistica-necesidades/logistica-necesidades.component';
import { FinanzasComponent } from './modules/asistentes/components/finanzas/finanzas.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // Redirige la raíz a /login
    pathMatch: 'full', // Requerido para rutas vacías
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'dv-home',
    component: DvHomeComponent,
    /*children: [
      { path: 'participantes', component: DvParticipantesComponent },
      { path: 'certificaciones', component: DvCertificacionesComponent },
      { path: 'seguimiento', component: DvSeguimientoComponent },
    ],*/
  },
  
  {
    path: 'logistica',
    component: LogisticaHomeComponent,
    children: [
      { path: 'traslados', component: LogisticaTrasladosComponent },
      { path: 'hospedaje', component: LogisticaHospedajeComponent },
      { path: 'necesidades', component: LogisticaNecesidadesComponent },
    ],
  },

  {
    path: 'finanzas',
    component: FinanzasComponent,
  },
  // Ruta comodín para manejar URLs incorrectas
  {
    path: '**',
    redirectTo: 'dashboard', // Redirige cualquier ruta no reconocida a login
  },
];
