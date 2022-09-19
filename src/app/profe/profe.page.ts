import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocentesService } from './docentes.service';
import { Profe } from './profe';
import Swal from 'sweetalert2';
import { AlertController } from '@ionic/angular';





@Component({
  selector: 'app-profe',
  templateUrl: './profe.page.html',
  styleUrls: ['./profe.page.scss'],
})
export class ProfePage implements OnInit {

  handlerMessage = '';
  roleMessage = '';


  

  docente = []
  titulo = "Docentes"

  constructor(private servicio: DocentesService, private router: Router, private alertController: AlertController) { }
  

 
 
 
  ngOnInit() {
  }
   

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Desea generar el codigo para esta sesión',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
}

 
