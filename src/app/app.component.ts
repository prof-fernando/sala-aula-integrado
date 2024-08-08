import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, MatInputModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sala-de-aula-integrado';
  mensagens: any;
  constructor(private auth: AngularFireAuth, private db: Firestore) {
    const colecao = collection(db, 'msgs');
    this.mensagens = collectionData(colecao);
  }
  enviarEmail() {
    this.auth.sendPasswordResetEmail('EMAIL@iffarroupilha.edu.br');
  }
}
