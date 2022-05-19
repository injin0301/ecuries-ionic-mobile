import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererUsersPageRoutingModule } from './gerer-users-routing.module';

import { GererUsersPage } from './gerer-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GererUsersPageRoutingModule
  ],
  declarations: [GererUsersPage]
})
export class GererUsersPageModule {}
