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
  
id:any
isLoaded:boolean=false
  ngOnInit(): void {
    this.id=1
    const myArray = window.location.href.split("/");
    const lastel = (myArray[myArray.length-1])
    switch(lastel){
      case 'home':{
        this.id = 1;
        break;
      }
      case 'councils':{
        this.id = 2;
        break;
      }
      case 'events':{
        this.id = 3;
        break;
      }
      case 'gallery':{
        this.id = 4;
        break;
      }
      case 'transperancy':{
        this.id = 5;
        break;
      }
      case 'officebearers':{
        this.id = 6;
        break;
      }
      case 'more':{
        this.id = 7;
        break;
      }
    }
    this.isLoaded=true
  }
  setId(id:number){
    this.id = id
  }
  mb(){
    
    var primaryNav:any = document.querySelector('.primary-navigation');
var navToggle:any = document.querySelector('.mobile-nav-toggle');
    var visibility:any = primaryNav.getAttribute("data-visible");
  
    if(visibility === "false"){
      primaryNav.setAttribute("data-visible", 'true');
      navToggle.setAttribute("aria-expanded", 'true');
    } else if(visibility === "true"){
      primaryNav.setAttribute("data-visible", 'false');
      navToggle.setAttribute("aria-expanded", 'false');
    }
  }
  
}
