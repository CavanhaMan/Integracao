import { Routes, RouterModule } from '@angular/router';
import { ConteudoComponent } from './conteudo.component';

const CONTEUDO_ROUTES: Routes = [{
  path: '',
  component: ConteudoComponent
},
{
  path: ':id',
  component: ConteudoComponent
}];

export const conteudoRouting = RouterModule.forChild(CONTEUDO_ROUTES);