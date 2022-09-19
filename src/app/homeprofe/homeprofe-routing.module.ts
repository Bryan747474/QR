import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeprofePage } from './homeprofe.page';

const routes: Routes = [
  {
    path: '',
    component: HomeprofePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeprofePageRoutingModule {}
