import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', redirectTo: 'usuarios', pathMatch: 'full'
  },



  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    //loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  
  children: [

    {
      path: '',
      loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosPageModule)
    },

  ] 
},
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'profe',
    loadChildren: () => import('./profe/profe.module').then( m => m.ProfePageModule)
  },
  {
    path: 'homeprofe',
    loadChildren: () => import('./homeprofe/homeprofe.module').then( m => m.HomeprofePageModule)
  },
  {
    path: 'asistencias',
    loadChildren: () => import('./asistencias/asistencias.module').then( m => m.AsistenciasPageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./acercade/acercade.module').then( m => m.AcercadePageModule)
  }
  

  





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
