import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProfessorComponent } from './professor.component';
import { professoresRouting } from './professores.routing';
import { FormsModule } from '@angular/forms';
import { ProfessorService } from './professor.service';

// Modulo do professor onde usei para implementar sub rotas para professores como por exemplo /professores/1
@NgModule({
  imports: [
    CommonModule,
    professoresRouting,
    FormsModule
  ],
  declarations: [
    ProfessorComponent
  ],
  providers: [
    ProfessorService
  ]
})
export class ProfessoresModule {

}
