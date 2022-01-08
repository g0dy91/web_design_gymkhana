import { Component, OnInit } from '@angular/core';
declare var x:any;
@Component({
  selector: 'app-office-bearers',
  templateUrl: './office-bearers.component.html',
  styleUrls: ['./office-bearers.component.scss']
})
export class OfficeBearersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new x();
  }

}
