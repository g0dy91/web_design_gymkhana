import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}
  name :any= 'Angular ' ;
 
    image1:any="https://images.unsplash.com/photo-1581789164394-810293cd79ce";
    image2:any="https://images.unsplash.com/photo-1562690868-60bbe7293e94";
    image3:any="https://images.unsplash.com/photo-1536677813196-8fed27bcecdc"
    image4:any="https://images.unsplash.com/photo-1599198688091-926a8df3c9be"
    defaultImage:any = 'https://via.placeholder.com/1000/09f/fff.png';
   
    images :any= `https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?fm=jpg 700w,
                https://images.unsplash.com/photo-1437818628339-19ded67ade8e?fm=jpg 1100w`;
      
  ngOnInit(): void { 
    
  }
 
}
