import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AreaConhecimento } from '../area-conhecimento';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable({providedIn: 'root'})
  export class AreaConhecimentosService{
    private url: string = 'http://localhost:9000/areaConhecimentos';

    areaConhecimentosChanged = new EventEmitter<Observable<AreaConhecimento[]>>();

    constructor (private http: Http) {    }

    getAll(): Observable<AreaConhecimento[]>{
      return this.http.get(this.url)
                      .map(res => res.json())
                      .catch(this.handleError);
    }

    private handleError(error: any){
      let erro = error.message || 'Server error';
      console.error('Ocorreu um erro', error);
      return Observable.throw(erro);
    }

    /******/
    add(areaConhecimento: AreaConhecimento) {
      return this.http.post(this.url,JSON.stringify(areaConhecimento),
      {headers: this.getHeaders()})
      .do(data => this.areaConhecimentosChanged.emit(this.getAll()))
      .catch(this.handleError);
    }

    update(areaConhecimento: AreaConhecimento) {
      return this.http.put(this.url,JSON.stringify(areaConhecimento),
      {headers: this.getHeaders()})
      .do(data => this.areaConhecimentosChanged.emit(this.getAll()))
      .catch(this.handleError);
    }

    remove(id: number) {
      return this.http.delete(this.getUrl(id),
            {headers: this.getHeaders()})
            //.map(res => res.json())
            .do(data => this.areaConhecimentosChanged.emit(this.getAll()))
            .catch(this.handleError);
    }

    get(id: number) {
      return this.getAll()
            .map((list: any) => list.find(areaConhecimento => areaConhecimento.codigo == id))
            .catch(this.handleError);
    }

    private getHeaders() {
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return headers;
    }

    private getUrl(id: number) {
      return `${this.url}/${id}`;
    }


  }
  