import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/asistentes/components/dashboard/dashboard.component';
import { LoginComponent } from './modules/asistentes/components/login/login.component';
import { DvHomeComponent } from './modules/asistentes/components/dv-home/dv-home.component';
import { LogisticaHomeComponent } from './modules/asistentes/components/logistica/logistica-home.component';
import { LogisticaTrasladosComponent } from './modules/asistentes/components/logistica-traslados/logistica-traslados.component';
import { LogisticaHospedajeComponent } from './modules/asistentes/components/logistica-hospedaje/logistica-hospedaje.component';
import { LogisticaNecesidadesComponent } from './modules/asistentes/components/logistica-necesidades/logistica-necesidades.component';
import { FinanzasComponent } from './modules/asistentes/components/finanzas/finanzas.component';
import { DvDatosGeneralesTrackComponent } from './modules/asistentes/components/dv-datos-generales-track/dv-datos-generales-track.component';
import { DvCertificacionesSeguimientoComponent } from './modules/asistentes/components/dv-certificaciones-seguimiento/dv-certificaciones-seguimiento.component';
import { MentorConfirmacionComponent } from './modules/asistentes/components/mentor-confirmacion/mentor-confirmacion.component';


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
    children: [
      { path: 'datos', component: DvDatosGeneralesTrackComponent },
      { path: 'certificaciones', component: DvCertificacionesSeguimientoComponent },
      { path: 'confirmaciones', component: MentorConfirmacionComponent },
    ],
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
