import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phd',
  templateUrl: './phd.component.html',
  styleUrls: ['./phd.component.scss']
})
export class PhdComponent implements OnInit {

  constructor() { }

  @Input()
  phd_crs!: any;  
  
  ngOnInit(): void {
  }

}
