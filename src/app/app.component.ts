// import { Component } from '@angular/core';
import { Component, OnInit } from "@angular/core";
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'annoor-ui';
  constructor(private ngxService: NgxUiLoaderService) { }
  ngOnInit() {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 1000);
  }
}
