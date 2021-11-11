import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const modules = [
  CommonModule,
  NgbModule,
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class BootstrapModule { }