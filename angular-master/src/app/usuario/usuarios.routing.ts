import { Routes, RouterModule } from "@angular/router";
import { UsuarioComponent } from './usuario.component';

const USUARIOS_ROUTES: Routes = [
    {path: '',
    component: UsuarioComponent
},

{
    path: ':id',
    component: UsuarioComponent
}];

export const usuariosRouting = RouterModule.forChild(USUARIOS_ROUTES);