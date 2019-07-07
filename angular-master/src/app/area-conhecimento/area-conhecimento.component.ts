import { Component, OnInit } from '@angular/core';
import { AreaConhecimento } from '../area-conhecimento';
import { AreaConhecimentosService } from './area-conhecimentos.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-area-conhecimento',
  templateUrl: './area-conhecimento.component.html',
  styleUrls: ['./area-conhecimento.component.css']
})
export class AreaConhecimentoComponent implements OnInit {
 
  private areaConhecimentoIndex: number;
  private isNew: boolean = true;
  private areaConhecimento: AreaConhecimento;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router:Router,
              private areaConhecimentoService: AreaConhecimentosService) { }
  
  areaConhecimentos : AreaConhecimento [] = [];

  criterio: String;

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')){
          this.isNew = false;
          this.areaConhecimentoIndex = params['id'];
          this.areaConhecimentoService.get(this.areaConhecimentoIndex)
          .subscribe(data => this.areaConhecimento = data);
        } else {this.isNew = true;}
      }
    );
    
    this.areaConhecimentoService.areaConhecimentosChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.areaConhecimento = data
      )
    );

    this.areaConhecimentos = [{
    'codigo' : 1,
    'nome' : 'Linguagens'
    }]
  }

    /******** */
  novo() {
    this.areaConhecimento = new AreaConhecimento();
  }
  
  cancelar() {
    this.voltar();
  }
  
  voltar() {
    this.router.navigate(['/areaConhecimentos']);
   }
  
  salvar() {
    let result;
    if (this.isNew) {
      result = this.areaConhecimentoService.add(this.areaConhecimento);
      } else {
      result = this.areaConhecimentoService.update(this.areaConhecimento);
      }
    this.novo();
      this.voltar();
      result.subscribe(data => alert('sucesso ' +data),
      err => {
        alert("An error occurred. "+ err);
      });
    }
  
    excluir() {
      if (this.areaConhecimento.codigo == null) {
        alert('Selecione alguma Área de Conhecimento');
      } else {
        if (confirm('Você realmente quer excluir a Área de Conhecimento ' + this.areaConhecimento.nome + '?')) {
          this.areaConhecimentoService.remove(this.areaConhecimento.codigo)
          .subscribe(
            data => alert('Area de Conhecimento removida '+data),
            err => {
              alert('Area de Conhecimento não removida');
            });
            this.novo();
            this.voltar();
        }
      }
    }
  
    
    // this.areaConhecimentoService.getAll()
    //   .subscribe(data =>this.areaConhecimentos = data, err =>{alert('Aconteceu um erro!'); });
  }

