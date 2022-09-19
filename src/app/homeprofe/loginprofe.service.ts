import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LoginprofeService {

  constructor() { }

  private docente =  [{
    id: '001',
    user : 'Julito',
    pass : 'julito'
   
  },

  {
    id: '002',
    user : 'carlos',
    pass : 'java'
   

  }

]


obtenerDocente (user:string, pass:string) {
  return {
    ...this.docente.find(aux => {
      return aux.user === user && aux.pass === pass
    })
  }
}
  

}
