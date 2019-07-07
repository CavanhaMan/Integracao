import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { usuariosRouting } from './usuarios.routing';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../usuario.service';


@NgModule({
    imports: [CommonModule, usuariosRouting, FormsModule],
    declarations: [UsuarioComponent],
    providers: [UsuarioService]
})
export class UsuariosModule{

 }