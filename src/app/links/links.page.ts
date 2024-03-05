import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-links',
  templateUrl: './links.page.html',
  styleUrls: ['./links.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class LinksPage implements OnInit {
  
  message = '';
  items: { nombre: string, link: string }[] = [
    { nombre: 'Elemento 1', link: 'link1' },
    { nombre: 'Elemento 2', link: 'link2' },
    { nombre: 'Elemento 3', link: 'link3' }
  ];
  isToastOpen = false;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.setOpen(true);
      this.items.push({ nombre: data[0], link: data[1] });
      this.message = `Hello, ${data}!`;
    }
  }

  
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }


}
