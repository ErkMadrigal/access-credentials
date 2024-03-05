import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detail-link',
  templateUrl: './detail-link.component.html',
  styleUrls: ['./detail-link.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink]

})
export class DetailLinkComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
