import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulesTarifsBodyPageRoutingModule } from './formules-tarifs-body-routing.module';

import { FormulesTarifsBodyPage } from './formules-tarifs-body.page';

import { FooterModule } from 'src/app/components/footer/footer.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulesTarifsBodyPageRoutingModule,
    FooterModule
  ],
  declarations: [FormulesTarifsBodyPage]
})
export class FormulesTarifsBodyPageModule {}
