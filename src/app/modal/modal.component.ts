import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';
import { ConectionsService } from '../conections.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [FormsModule, IonicModule, ReactiveFormsModule]
})
export class ModalComponent  implements OnInit {

  dataForm: FormGroup;

  items: any;

  isToastOpen = false;

  message: string = ''
  
  @Input() id: number = 0;

  constructor(private modalCtrl: ModalController, private conectionsService: ConectionsService, private formBuilder: FormBuilder) {
    this.dataForm = this.formBuilder.group({
      link: [''],
      name: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required],

    })
  }
  
  ngOnInit() {
    if(this.id){
      this.items = this.conectionsService.getDatoLink(this.id);
      this.dataForm = this.formBuilder.group({
        link: [this.items.link],
        name: [this.items.name, Validators.required],
        password: [this.items.password, Validators.required],
        username: [this.items.username, Validators.required],

      });
    }
  }
  
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  confirm() {
    if(this.dataForm.valid){
      return this.modalCtrl.dismiss([this.dataForm.value.link, this.dataForm.value.name, this.dataForm.value.password, this.dataForm.value.username], 'confirm');
    }else{
      this.setOpen(true);
      this.message = 'Verifica los campos';
      return null;
    }
  }


}
