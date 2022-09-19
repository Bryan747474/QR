import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from './usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;


  }
 usuarios = []
 titulo = "USUARIOS"



  constructor(private servicio: UsuariosService, private router: Router) { }


  
  ngOnInit() {

  }


 

}
