import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnseignementPageRoutingModule } from './enseignement-routing.module';

import { EnseignementPage } from './enseignement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnseignementPageRoutingModule
  ],
  declarations: [EnseignementPage]
})
export class EnseignementPageModule {}
