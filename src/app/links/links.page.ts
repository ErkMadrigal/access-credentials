import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular/standalone';
import { ConectionsService } from '../conections.service';


@Component({
  selector: 'app-links',
  templateUrl: './links.page.html',
  styleUrls: ['./links.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class LinksPage implements OnInit {

  message = '';
  
  items: any[] = [];

  isToastOpen = false;

  constructor(private modalCtrl: ModalController, private alertController: AlertController, private conectionsService: ConectionsService) { 
  }

  ngOnInit(): void {
    this.getDataLinks()
  }
  
  getDataLinks(){
    this.items = this.conectionsService.getDatosLinks();
  }

  async openModal(id: number = 0) {
    
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        id: id
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      if(id > 0){
        this.updateElement(id, data[0], data[1], data[3], data[2])
      }else{
        this.setOpen(true);
        this.items.push({id: id++, name: data[0], link: data[1], username: data[3], password:data[2] });
        this.message = `Link agregado con exito`;
      }
    }
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  async mostrarAlerta(id: number){
    const alert = await this.alertController.create({
      header: "Seguro que deseas eliminarlo?",
      message: "Esta accion no podra revertirse",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: 'danger',
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.deteleElement(id)
          }
        }
      ]
    });
    await alert.present(); 
  }

  deteleElement(id: number){
    this.items = this.items.filter(elem => elem.id !== id)
  }

  updateElement(id: number, name: string, link: string, username: string, password: string){
    const index = this.items.findIndex(item => item.id === id)

    if(index !== -1){
      this.items[index] = {
        ...this.items[index],
        name: name,
        link: link,
        username: username,
        password: password
      };
    }
  }

}
