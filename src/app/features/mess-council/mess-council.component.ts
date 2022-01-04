import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mess-council',
  templateUrl: './mess-council.component.html',
  styleUrls: ['./mess-council.component.scss']
})
export class MessCouncilComponent implements OnInit {

  constructor() { }
  messInspection: Boolean = false
  messCoordinator: Boolean = false
  messhygene: Boolean = false
  messprep: Boolean = false
  canteenhygene: Boolean = false
  messgriev: Boolean = false
  cinspect: Boolean = false
  cgriev: Boolean = false
  cmcord: Boolean = false
  ngOnInit(): void {
  }
  coord() {
    this.messCoordinator = true;
    this.cmcord = false;
    this.messprep = false;
    this.messhygene = false;
    this.messInspection = false;
    this.canteenhygene = false;
    this.messgriev = false;
    this.cinspect = false;
    this.cgriev = false;
  }
  prep() {
    this.messCoordinator = false;
    this.cmcord = false;
    this.messprep = true;
    this.messhygene = false;
    this.messInspection = false;
    this.canteenhygene = false;
    this.messgriev = false;
    this.cinspect = false;
    this.cgriev = false;
  }
  hygene() {
    this.messCoordinator = false;
    this.cmcord = false;
    this.messprep = false;
    this.messhygene = true;
    this.messInspection = false;
    this.canteenhygene = false;
    this.messgriev = false;
    this.cinspect = false;
    this.cgriev = false;
  }
  inspect() {
    this.messCoordinator = false;
    this.cmcord = false;
    this.messprep = false;
    this.messhygene = false;
    this.messInspection = true;
    this.canteenhygene = false;
    this.messgriev = false;
    this.cinspect = false;
    this.cgriev = false;
  }
  chygene() {
    this.messCoordinator = false;
    this.cmcord = false;
    this.messprep = false;
    this.messhygene = false;
    this.messInspection = false;
    this.canteenhygene = true;
    this.messgriev = false;
    this.cinspect = false;
    this.cgriev = false;
  }
  griev() {
    this.messCoordinator = false;
    this.cmcord = false;
    this.messprep = false;
    this.messhygene = false;
    this.messInspection = false;
    this.canteenhygene = false;
    this.messgriev = true;
    this.cinspect = false;
    this.cgriev = false;
  }
  cinsp() {
    this.messCoordinator = false;
    this.cmcord = false;
    this.messprep = false;
    this.messhygene = false;
    this.messInspection = false;
    this.canteenhygene = false;
    this.messgriev = false;
    this.cinspect = true;
    this.cgriev = false;
  }
  cgri() {
    this.messCoordinator = false;
    this.cmcord = false;
    this.messprep = false;
    this.messhygene = false;
    this.messInspection = false;
    this.canteenhygene = false;
    this.messgriev = false;
    this.cinspect = false;
    this.cgriev = true;
  }
  cmc() {
    this.messCoordinator = false;
    this.cmcord = true;
    this.messprep = false;
    this.messhygene = false;
    this.messInspection = false;
    this.canteenhygene = false;
    this.messgriev = false;
    this.cinspect = false;
    this.cgriev = false;
  }
}
