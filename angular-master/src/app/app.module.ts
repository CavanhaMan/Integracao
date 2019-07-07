import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';

/*--------------imports copiado do menu---------------*/
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
/*--------------fim dos imports copiado do menu---------------*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaConhecimentoComponent } from './area-conhecimento/area-conhecimento.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ProfessorComponent } from './professor/professor.component';
import { UsuarioComponent } from './usuario/usuario.component'; // aqui????nao.. pode terminar
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './login/login-service.service';
import { AuthGuard } from './login/login.guard';
import { from } from 'rxjs';

// import modulo professor para usar como rotas no app module
import { ProfessoresModule } from './professor/professores.module';


@NgModule({
  declarations: [
    AppComponent,
    AreaConhecimentoComponent,
    ConteudoComponent,
    DisciplinaComponent,
    // ProfessorComponent,
    HomeComponent,
    UsuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    HttpClientModule,
    /*--------------alterações para login / Ralta routingModule--------------*/
    ReactiveFormsModule,

    /*--------------imports copiado do menu---------------*/
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    /*--------------fim dos imports copiado do menu---------------*/
    // ProfessoresModule,
  ],
  providers: [
    LoginServiceService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
