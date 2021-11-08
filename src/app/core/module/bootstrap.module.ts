import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2BootstrapModule } from 'ng-bootstrap';
const modules = [
  CommonModule,
  Ng2BootstrapModule,
]


@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class BootstrapModule { }