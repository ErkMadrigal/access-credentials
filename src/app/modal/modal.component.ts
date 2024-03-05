import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [FormsModule, IonicModule]
})
export class ModalComponent  implements OnInit {

  link: string = '';
  name: string = '';
  password: string = '';
  username: string = '';


  constructor(private modalCtrl: ModalController) {
  }
  
  ngOnInit() {

  }
  
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss([this.link, this.name, this.password, this.username ], 'confirm');
  }


}
