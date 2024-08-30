import { Component } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-livro',
  standalone: true,
  imports: [MatInputModule, MatButton, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './editar-livro.component.html',
  styleUrl: './editar-livro.component.scss',
})
export class EditarLivroComponent {
  formGroup = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
  });

  constructor(
    private db: Firestore,
    private snack: MatSnackBar,
    private routes: Router
  ) {}

  salvar() {
    if (this.formGroup.valid) {
      // pego a colecao
      const colecao = collection(this.db, 'biblioteca');
      // insere no banco
      addDoc(colecao, { ...this.formGroup.value }).then(() => {
        this.snack
          .open('Salvo com sucesso!', 'OK')
          .onAction()
          .subscribe(() => {
            // volta para a tela inicial
            // quando se clica no botao ok
            this.routes.navigate(['']);
          });
      });
    }
  }
}
