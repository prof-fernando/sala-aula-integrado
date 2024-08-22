import { Routes } from '@angular/router';
import { LivroComponent } from './paginas/livro/livro.component';
import { EditarLivroComponent } from './paginas/editar-livro/editar-livro.component';

export const routes: Routes = [
  {
    path: '',
    component: LivroComponent,
  },
  {
    path: 'livro',
    component: EditarLivroComponent,
  },
];
