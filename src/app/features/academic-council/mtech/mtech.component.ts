import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mtech',
  templateUrl: './mtech.component.html',
  styleUrls: ['./mtech.component.scss']
})
export class MtechComponent implements OnInit {

  constructor() { }

  @Input()
  mtech_crs!: any;  
  ngOnInit(): void {
  }

}
