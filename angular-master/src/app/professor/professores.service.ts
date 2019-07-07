import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Professor } from './professor';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable({ providedIn: 'root' })
export class ProfessoresService {
  private url: string = 'http://localhost:9000/professors';

  professoresChanged = new EventEmitter<Observable<Professor[]>>();

  constructor(
    private http: Http
  ) { }

  private getUrl(id: number) {
    return `${this.url}/${id}`;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private handleError(error: any) {
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro', error);
    return Observable.throw(erro);
  }

  getAll(): Observable<Professor[]> {
    return this.http.get(this.url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  get(id: number) {
    return this.getAll()
      .map((list: any) => list.find((professor: Professor) => professor.id == id))
      .catch(this.handleError);
  }

  add(professor: Professor) {
    return this.http.post(this.url, JSON.stringify(professor), { headers: this.getHeaders() })
      .do(data => this.professoresChanged.emit(this.getAll()))
      .catch(this.handleError);
  }

  update(professor: Professor) {
    return this.http.put(this.url, JSON.stringify(professor), { headers: this.getHeaders() })
      .do(data => this.professoresChanged.emit(this.getAll()))
      .catch(this.handleError);
  }

  update2(professor: Professor) {
    return this.http.put(this.getUrl(professor.id), JSON.stringify(professor), { headers: this.getHeaders() })
      .do(data => this.professoresChanged.emit(this.getAll()))
      .catch(this.handleError);
  }

  remove(id: number) {
    return this.http.delete(this.getUrl(id), { headers: this.getHeaders() })
      //.map(res => res.json())
      .do(data => this.professoresChanged.emit(this.getAll()))
      .catch(this.handleError);
  }
}
