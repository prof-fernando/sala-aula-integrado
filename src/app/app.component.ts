import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sala-de-aula-integrado';
  constructor(private auth: AngularFireAuth) {}
  enviarEmail() {
    this.auth.
    sendPasswordResetEmail('EMAIL@iffarroupilha.edu.br');
  }
}
