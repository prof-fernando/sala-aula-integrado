import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.scss',
})
export class LivroComponent {
  livros: any;
  constructor(private db: Firestore) {
    const colecao = collection(db, 'biblioteca');
    this.livros = collectionData(colecao);
  }
}
