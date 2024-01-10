import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  


  notActive = "notActive"
  notActive2 = "notActive"

  setActive() {
   this.notActive = 'active'
   this.notActive2 = 'notActive'
  }
  setActive2() {
    this.notActive2 = 'active'
    this.notActive = 'notActive'
  }

}
