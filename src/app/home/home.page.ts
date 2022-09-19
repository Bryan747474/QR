import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;

    
  
}



  usuario : Usuario


  texto : String

  



  constructor(private router: Router, private servicio: LoginService) {}


  ngOnInit() {
  }



  login (txtUser,txtPass) {
    
    this.usuario = this.servicio.obtenerUsuario (txtUser.value, txtPass.value)

    if (txtUser.value === this.usuario.user && txtPass.value === this.usuario.pass) {

      this.router.navigate (['/inicio'])
    }

    else { this.texto = "Error en las contraseñas" }

  }





  send (txtUser,txtPass) {
    
    this.usuario = this.servicio.obtenerUsuario (txtUser.value, txtPass.value)

     this.router.navigate (['/inicio'],)
  

  }

}


