import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';
import { ConectionsService } from '../conections.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [FormsModule, IonicModule]
})
export class ModalComponent  implements OnInit {

  items: any;

  error: any[] = [];

  isToastOpen = false;

  message: string = ''
  errorName: boolean = false;
  errorPass: boolean = false;
  errorUser: boolean = false;

  link: string = '';
  name: string = '';
  password: string = '';
  username: string = '';
  
  @Input() id: number = 0;

  constructor(private modalCtrl: ModalController, private conectionsService: ConectionsService) {
  }
  
  ngOnInit() {
    if(this.id){
      this.items = this.conectionsService.getDatoLink(this.id);
      this.link = this.items.link;
      this.name = this.items.name;
      this.password = this.items.password;
      this.username = this.items.username;
    }
  }
  
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  confirm() {
    if(this.error.length > 0){
      this.setOpen(true);
      this.message = 'Verifica los campos';
      return null;
    }else{
      return this.modalCtrl.dismiss([this.link, this.name, this.password, this.username], 'confirm');
    }
  }

  validate(){
    if(this.name == ''){
      this.error.push(1)
      this.errorName = true;
    }
    if(this.password == ''){
      this.error.push(1)
      this.errorPass = true;
    }
    
    if(this.username == ''){
      this.errorUser = true;
      this.error.push(1)
    }

    return this.error;
  }

}
