import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mess-council',
  templateUrl: './mess-council.component.html',
  styleUrls: ['./mess-council.component.scss']
})
export class MessCouncilComponent implements OnInit {

  constructor() { }
  messInspection:Boolean=false
  messCoordinator:Boolean=true
  ngOnInit(): void {
  }
  coord(){
    this.messCoordinator=true;
    this.messInspection=false;
  }
  prep(){

  }
  hygene(){

  }
  inspect(){
    this.messCoordinator=false;
    this.messInspection=true;
  }
}
