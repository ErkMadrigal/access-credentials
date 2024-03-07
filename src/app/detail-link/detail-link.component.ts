import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConectionsService } from '../conections.service';

@Component({
  selector: 'app-detail-link',
  templateUrl: './detail-link.component.html',
  styleUrls: ['./detail-link.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink]

})
export class DetailLinkComponent  implements OnInit {

  message: string = '';

  id: number = 0;

  items: any;

  isToastOpen = false;


  constructor(private route: ActivatedRoute,  private conectionsService: ConectionsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')
      if(id !== null && id !== undefined){
        this.id = parseInt(id);
        this.items = this.conectionsService.getDatoLink(this.id);
        console.log(this.items)
      }
    })
  }

  copy(text: string): void{
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy')
    document.body.removeChild(textarea)
    this.setOpen(true)
    this.message = 'texto copiado al prota papeles!'
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

}
