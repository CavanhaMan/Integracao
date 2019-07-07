import { Routes, RouterModule } from "@angular/router";
import { ProfessorComponent } from './professor.component';

const PROFESSORES_ROUTES: Routes = [
    {   
        path: '', // localhost:4200/professores
        component: ProfessorComponent
    },
    {   
        path: ':id', // localhost:4200/professores/:id | :id é um valor dinamico
        component: ProfessorComponent
    }
];

export const professoresRouting = RouterModule.forChild(PROFESSORES_ROUTES);