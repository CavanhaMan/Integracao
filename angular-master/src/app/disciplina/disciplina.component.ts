import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../disciplina';
import { DisciplinasService } from './disciplinas.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  private disciplinaIndex: number;
  private isNew: boolean = true;
  private disciplina: Disciplina;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router:Router,
              private disciplinaService: DisciplinasService) { }

  disciplinas: Disciplina [] = [];

  criterio: String;

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')){
          this.isNew = false;
          this.disciplinaIndex = params['id'];
          this.disciplinaService.get(this.disciplinaIndex)
          .subscribe(data => this.disciplina = data);
        } else {this.isNew = true;}
      }
    );

    this.disciplinaService.disciplinasChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.disciplina = data
      )
    );
          
    this.disciplinas = [{
    'codigo' : 1,
    'descricao' : 'Esta e a disciplina de portugues'
    }]
  }

    /******** */
  novo() {
    this.disciplina = new Disciplina();
  }
  
  cancelar() {
    this.voltar();
  }
  
  voltar() {
    this.router.navigate(['/disciplinas']);
   }
  
  salvar() {
    let result;
    if (this.isNew) {
      result = this.disciplinaService.add(this.disciplina);
      } else {
      result = this.disciplinaService.update(this.disciplina);
      }
    this.novo();
      this.voltar();
      result.subscribe(data => alert('sucesso ' +data),
      err => {
        alert("An error occurred. "+ err);
      });
    }
  
    excluir() {
      if (this.disciplina.codigo == null) {
        alert('Selecione alguma disciplina');
      } else {
        if (confirm('Você realmente quer excluir a disciplina ' + this.disciplina.descricao + '?')) {
          this.disciplinaService.remove(this.disciplina.codigo)
          .subscribe(
            data => alert('Disciplina removida '+data),
            err => {
              alert('Disciplina não removida');
            });
            this.novo();
            this.voltar();
        }
      }
    }
  
    // this.disciplinaService.getAll()
    //   .subscribe(data =>this.disciplinas = data, err =>{alert('Aconteceu um erro!'); });

  }


