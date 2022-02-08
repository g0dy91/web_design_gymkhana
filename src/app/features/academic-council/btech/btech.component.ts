import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btech',
  templateUrl: './btech.component.html',
  styleUrls: ['./btech.component.scss']
})
export class BtechComponent implements OnInit {

  constructor() { }

  @Input()
  btech_crs!: any;  

  ngOnInit(): void {
  }

}
