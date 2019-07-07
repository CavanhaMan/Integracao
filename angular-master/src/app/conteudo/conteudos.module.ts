import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { conteudoRouting } from './conteudos.routing';
import { ConteudoComponent } from './conteudo.component';
import { ConteudosService } from './conteudos.service';


@NgModule({
    imports: [
        CommonModule, conteudoRouting, FormsModule],
        declarations: [ConteudoComponent],
        providers: [ConteudosService]
})
export class ConteudosModule{ }