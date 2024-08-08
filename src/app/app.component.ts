import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sala-de-aula-integrado';
  constructor(private auth: AngularFireAuth) {}
  enviarEmail() {
    this.auth.sendPasswordResetEmail('EMAIL@iffarroupilha.edu.br');
  }
}
