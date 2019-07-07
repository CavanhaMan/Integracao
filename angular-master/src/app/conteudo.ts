import { Disciplina } from './disciplina';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { AreaConhecimento } from './area-conhecimento';

export class Conteudo {
    codigo: number;
    nome: string;
    descricao: string;
    competencia: string;
    disciplina: Disciplina;
    areaConhecimento: AreaConhecimento;
}
