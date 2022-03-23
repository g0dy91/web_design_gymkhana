import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from "@angular/common";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router, private scroller: ViewportScroller) { }
  

  ngOnInit(): void {
    
  }
  toTopCouncils() {
    this.scroller.scrollToAnchor("councils");
  }
  toTop(){
    this.scroller.scrollToAnchor("sticky-header")
  }
}
