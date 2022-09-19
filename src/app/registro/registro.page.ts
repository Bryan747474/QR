import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }



  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registro',
      subHeader: 'RegistrAPP',
      message: 'Usuario registrado Correctamente',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
