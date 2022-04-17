import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipePageRoutingModule } from './equipe-routing.module';

import { EquipePage } from './equipe.page';

import { FooterModule } from 'src/app/components/footer/footer.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipePageRoutingModule,
    FooterModule
  ],
  declarations: [EquipePage]
})
export class EquipePageModule {}
