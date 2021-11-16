import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
const modules = [
  CommonModule,
  NgbModule,
  FontAwesomeModule
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class BootstrapModule { }