import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConectionsService {

  constructor() { }

  getDatosLinks(){
    const items = [
      { id: 1, username: "erick.flores", password: "1qwwqe" ,name: 'SVPN', link: '' },
      { id: 2, username: "erick.flores@cheil.com", password: "1qwwqe" ,name: 'correo Cheil', link: '' },
      { id: 3, username: "erickMadFl", password: "1qwwqe" ,name: 'github', link: 'http://github.com'}
    ];

    return items;
  }

  getDatoLink(id: number) {
    const items = this.getDatosLinks();
    const getData = items.find(item => item.id === id);
    if(getData){
      return getData;
    }else{
      console.log("no se ecnontro valor")
      return null;
    }
  }
}
