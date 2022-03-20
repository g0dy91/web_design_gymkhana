import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./sticky-bar.component.scss']
})
export class StickyBarComponent implements OnInit {

  constructor() { }
  clicked:boolean=true

  ngOnInit(): void {
  }
hide(){
  if(this.clicked){
    $(".social-links").css('right', '-70px');
    $( ".share-btn" ).addClass( "hide-links" );
    $( ".share-btn" ).removeClass( "show-links" );
    this.clicked  = false;
} else {
    $(".social-links").css('right', '0px');
    $( ".share-btn" ).addClass( "show-links" );
    $( ".share-btn" ).removeClass( "hide-links" );
    this.clicked  = true;
}   

}
}
