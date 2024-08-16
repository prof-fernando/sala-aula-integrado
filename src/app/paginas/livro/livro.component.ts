import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [CommonModule],
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
