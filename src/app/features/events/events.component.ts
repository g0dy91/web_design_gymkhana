import { Component, OnInit } from '@angular/core';
declare var events_new:any;
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new events_new()
  }

}
