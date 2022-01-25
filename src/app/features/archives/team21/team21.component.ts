import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team21',
  templateUrl: './team21.component.html',
  styleUrls: ['./team21.component.scss'],
})
export class Team21Component implements OnInit {
  constructor() { }
  s: string = 'hi';
  @Input()
  election_details!: any;  


  ngOnInit(): void { }
}
