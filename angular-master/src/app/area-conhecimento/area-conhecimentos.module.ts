import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { areaConhecimentoRouting } from './area-conhecimentos.routing';
import { AreaConhecimentoComponent } from './area-conhecimento.component';
import { AreaConhecimentosService } from './area-conhecimentos.service';


@NgModule({
    imports: [
        CommonModule, areaConhecimentoRouting, FormsModule],
        declarations: [AreaConhecimentoComponent],
        providers: [AreaConhecimentosService]
})
export class AreaConhecimentosModule{ }