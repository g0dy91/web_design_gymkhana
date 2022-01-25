import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-election-temp',
  templateUrl: './election-temp.component.html',
  styleUrls: ['./election-temp.component.scss']
})
export class ElectionTempComponent implements OnInit {

  constructor() { }
  @Input()
  election_details!: any;  

  ngOnInit(): void {
  }

}
