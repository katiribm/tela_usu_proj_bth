import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from './usuarios/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http : HttpClient) { 

  }

  salvar(usuario : Usuarios) : Observable<Usuarios> {
    return this.http.post<Usuarios>('http://localhost:8080/api/usuarios', usuario);
  }
}
