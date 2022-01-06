import { Component, OnInit } from '@angular/core';
declare var x:any;
@Component({
  selector: 'app-te',
  templateUrl: './te.component.html',
  styleUrls: ['./te.component.scss']
})
export class TeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new x();
  }

}
