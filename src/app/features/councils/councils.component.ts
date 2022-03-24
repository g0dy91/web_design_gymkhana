import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-councils',
  templateUrl: './councils.component.html',
  styleUrls: ['./councils.component.scss']
})
export class CouncilsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  go_to_page(url:string){
    this. router. navigate(['/'+url]);
  }
  goToLink(url: string){
    window.open(url, "_blank");
}

}
