import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  login() {
    this.isLoading = true;
    
    const validCredentials = {
      email: 'admin@afs.org',
      password: 'afs2023'
    };

    setTimeout(() => {
      if (this.email === validCredentials.email && 
          this.password === validCredentials.password) {
        this.router.navigate(['/dashboard']);
      } else {
        this.snackBar.open('Credenciales incorrectas', 'Cerrar', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
      this.isLoading = false;
    }, 2000);
  }
}