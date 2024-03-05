import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

const primengModules = [
  SidebarModule,
  ButtonModule,
];


@NgModule({
  imports: [
    ...primengModules
  ],
  exports: [
    ...primengModules
  ],
})
export class PrimengModule { }
