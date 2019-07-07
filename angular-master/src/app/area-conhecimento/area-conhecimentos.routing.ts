import { Routes, RouterModule } from "@angular/router";
import { AreaConhecimentoComponent } from './area-conhecimento.component';

const AREACONHECIMENTO_ROUTES: Routes = [
    {path: '',
    component: AreaConhecimentoComponent
},
{
    path: ':id',
    component: AreaConhecimentoComponent
  }];

export const areaConhecimentoRouting = RouterModule.forChild(AREACONHECIMENTO_ROUTES);