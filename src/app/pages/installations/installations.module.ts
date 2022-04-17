import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationsPageRoutingModule } from './installations-routing.module';

import { InstallationsPage } from './installations.page';

import { FooterModule } from 'src/app/components/footer/footer.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationsPageRoutingModule,
    FooterModule
  ],
  declarations: [InstallationsPage]
})
export class InstallationsPageModule {}
