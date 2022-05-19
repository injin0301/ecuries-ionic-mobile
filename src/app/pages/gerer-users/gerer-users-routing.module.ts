import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GererUsersPage } from './gerer-users.page';

const routes: Routes = [
  {
    path: '',
    component: GererUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GererUsersPageRoutingModule {}
