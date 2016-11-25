import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

  }
  //N'est plus vraiment utilisée... parce que y a sûrement un autre moyen
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New checklist',
      message: 'Hello sir!',      
      buttons: [
        {
          text: 'Go away Alfred!'
        }
      ]
    });
    alert.present();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Ouin... On vérifie de quoi...",
      duration: 5000
    });
    let alert = this.alertCtrl.create({
      title: 'CONFIRMATION!!!',
      message: 'Marie-Eve Lemire est cute en criss!',      
      buttons: [
        { 
          text: 'Fermer'          
        }
      ]
    });
    loader.present();
    setTimeout(function(){
      alert.present()
    },5000);
  }

}
