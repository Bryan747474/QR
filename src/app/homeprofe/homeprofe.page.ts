import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profe } from './profe';
import { LoginprofeService } from './loginprofe.service';

@Component({
  selector: 'app-homeprofe',
  templateUrl: './homeprofe.page.html',
  styleUrls: ['./homeprofe.page.scss'],
})
export class HomeprofePage  {


  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;

    
  
}



  docente : Profe


  texto : String

  



  constructor(private router: Router, private servicio: LoginprofeService) {}


  ngOnInit() {
  }



  loginpro (txtUser,txtPass) {
    
    this.docente = this.servicio.obtenerDocente(txtUser.value, txtPass.value)

    if (txtUser.value === this.docente.user && txtPass.value === this.docente.pass) {

      this.router.navigate (['/profe'])
    }

    else { this.texto = "Error en las contraseñas" }

  }





  send (txtUser,txtPass) {
    
    this.docente = this.servicio.obtenerDocente (txtUser.value, txtPass.value)

     this.router.navigate (['/profe'],)
  

  }
}