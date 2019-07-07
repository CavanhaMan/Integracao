import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuariosService } from './usuarios.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  private usuarioIndex: number;
  private isNew: boolean = true;
  private usuario: Usuario;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router:Router,
              private usuarioService: UsuariosService) { }

  usuarios: Usuario[] = [];

  criterio: String;

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')){
          this.isNew = false;
          this.usuarioIndex = params['id'];
          this.usuarioService.get(this.usuarioIndex)
          .subscribe(data => this.usuario = data);
        } else {this.isNew = true;}
      }
    );
    
    this.usuarioService.usuariosChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.usuario = data
      )
    );

    this.pesquisarTodos();


    this.usuarios= [{
      'codigo': 1,
      'login':'jordana@email.com',
      'senha':'123456',
    }] 
  }

  pesquisarTodos() {
    this.usuarioService.getAll()
    .subscribe(data =>this.usuarios = data, err =>{alert('Aconteceu um erro!'); });
  }

    /******** */
  novo() {
    this.usuario = new Usuario();
  }
  
  cancelar() {
    this.voltar();
  }
  
  voltar() {
    this.router.navigate(['/usuario']);
   }
  
  salvar() {
    let result;
    if (this.isNew) {
      result = this.usuarioService.add(this.usuario);
      } else {
      result = this.usuarioService.update(this.usuario);
      }
    
    this.novo();
    this.voltar();
    
    result.subscribe(data => {alert('sucesso ' +data); this.pesquisarTodos();},
    err => {
      alert("An error occurred. "+ err);
      });
  }
  
  excluir() {
    if (this.usuario.codigo == null) {
      alert('Selecione algum usuario');
    } else {
      if (confirm('Você realmente quer excluir o usuario '+this.usuario.login+'?')) {
        this.usuarioService.remove(this.usuario.codigo)
        .subscribe(
          data => alert('Usuario removido '+data),
          err => {
            alert('Usuario não removido');
          });
        this.novo();
        this.voltar();
      }
    }
  }
  
     
    
    

  }


