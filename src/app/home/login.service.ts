import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  constructor() { }

  private usuarios =  [{
    id: '001',
    user : 'admin',
    pass : 'admin',
    ocupacion: 'admin'
  },

  {
    id: '002',
    user : 'beto',
    pass : 'colo',
    ocupacion: 'estudiante'

  },

  {
    id: '003',
    user : 'jose',
    pass : 'lota',
    ocupacion: 'estudiante'
  },


  {
    id: '004',
    user : 'carlo',
    pass : 'java',
    ocupacion: 'docente'


  }

]

obtenerUsuario (user:string, pass:string) {
  return {
    ...this.usuarios.find(aux => {
      return aux.user === user && aux.pass === pass
    })
  }
}


}
