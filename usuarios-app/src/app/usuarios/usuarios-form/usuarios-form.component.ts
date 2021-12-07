import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  usuario: Usuarios;
  sucesso: boolean = false;
  errosApi: String[];

  constructor(private service : UsuariosService) { 
    this.usuario = new Usuarios();
    
    /*this.usuario.id = 1; 
    this.usuario.nome = "Usuario teste";
    this.usuario.cpf = "777.777.777-77";
    this.usuario.nomeUsuario = "usuarioTeste";
    //senha: string -- autom
    this.usuario.funcao = "função teste";
    this.usuario.setor = "setor teste";
    this.usuario.empresa = "empresa teste";
    /* private Boolean alteraDados; //2
     private Boolean alteraSenha; //2
     private Boolean alteraLogin; //2
     private Boolean redefineSenha; //2*/
     
  }

  ngOnInit(): void {
  }

  gravarUsuario() {
    this.service
    .salvar(this.usuario)
    .subscribe(response => {
      this.sucesso = true;
      this.errosApi = null;
      this.usuario = response; 
    }, errorResponse => {
      this.errosApi = errorResponse.error.erros;
      this.sucesso = false;
    })
  }

}
