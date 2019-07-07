import { Component, OnInit } from '@angular/core';
import { Conteudo } from '../conteudo';
import { ConteudosService } from './conteudos.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  private conteudoIndex: number;
  private isNew: boolean = true;
  private conteudo: Conteudo;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router:Router,
              private conteudoService: ConteudosService) { }

  conteudos: Conteudo [] = [];

  criterio: String;

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')){
          this.isNew = false;
          this.conteudoIndex = params['id'];
          this.conteudoService.get(this.conteudoIndex)
          .subscribe(data => this.conteudo = data);
        } else {this.isNew = true;}
      }
    );

    this.conteudoService.conteudosChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.conteudo = data
      )
    );

    this.conteudos= [{
      'codigo': 1,
      'nome': 'conteudo de portugues',
      'descricao': 'esta e a descricao do conteudo de portuges...',
      'competencia' : "esta e a competencia do conteudo de portugues...",
      'disciplina': null,
      'areaConhecimento' : null
    }]
  }

    /******** */
  novo() {
    this.conteudo = new Conteudo();
  }
  
  cancelar() {
    this.voltar();
  }
  
  voltar() {
    this.router.navigate(['/conteudos']);
   }
  
  salvar() {
    let result;
    if (this.isNew) {
      result = this.conteudoService.add(this.conteudo);
      } else {
      result = this.conteudoService.update(this.conteudo);
      }
    this.novo();
      this.voltar();
      result.subscribe(data => alert('sucesso ' +data),
      err => {
        alert("An error occurred. "+ err);
      });
    }
  
    excluir() {
      if (this.conteudo.codigo == null) {
        alert('Selecione algum conteudo');
      } else {
        if (confirm('Você realmente quer excluir o conteudo ' + this.conteudo.descricao + '?')) {
          this.conteudoService.remove(this.conteudo.codigo)
          .subscribe(
            data => alert('Conteudo removido '+data),
            err => {
              alert('Conteudo não removido');
            });
            this.novo();
            this.voltar();
        }
      }
    }
  

    /*
    this.conteudoService.getAll()
      .subscribe(data =>this.conteudos = data, err =>{alert('Aconteceu um erro!'); });

    
  }
*/
}
