import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public router:Router, private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  toTop(){
    this.scroller.scrollToAnchor("primary-navigation")
  }
}
