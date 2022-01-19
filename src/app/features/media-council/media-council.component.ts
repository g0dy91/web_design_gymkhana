import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-council',
  templateUrl: './media-council.component.html',
  styleUrls: ['./media-council.component.scss']
})
export class MediaCouncilComponent implements OnInit {

  constructor() { }
  web: Boolean = false
  content: Boolean = false
  digital: Boolean = false
  visual: Boolean = false
  photography: Boolean = false
  ngOnInit(): void {
  }
  webt() {
    this.web = true
    this.content = false
    this.digital = false
    this.visual = false
    this.photography = false
  }
  digitalt() {
    this.web = false
    this.content = false
    this.digital = true
    this.visual = false
    this.photography = false
  }
  visualt() {
    this.web = false
    this.content = false
    this.digital = false
    this.visual = true
    this.photography = false
  }
  contentt() {
    this.web = false
    this.content = true
    this.digital = false
    this.visual = false
    this.photography = false
  }
  photot() {
    this.web = false
    this.content = false
    this.digital = false
    this.visual = false
    this.photography = true
  }
}
