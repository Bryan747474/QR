import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../usuarios';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {


usuario: Usuario



  constructor(private activateRoute: ActivatedRoute, private servicio: UsuariosService,
   private alerta: AlertController, private router: Router, private navextra: NavigationExtras ) { }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe(paraMap => {
      this.usuario = this.servicio.obtenerUsuario(paraMap.get('id'))
       console.log(paraMap.get('id'))
    })

  }

  send() {
    
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.usuario

    }
  }
    this.router.navigate(['/inicio'], navigationExtras);
  }
















  
}
