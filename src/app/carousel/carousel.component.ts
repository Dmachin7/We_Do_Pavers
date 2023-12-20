import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  notActive = 'notActive';

  show = "show";
  dontShow = "dontShow";


  images: any[] = [
    {
      "image": "./assets/paver.jpeg"
    },
    {
      "image": "./assets/paver2.jpeg"
    },
    {
      "image": "./assets/paver3.jpeg"
    },
    {
      "image": "./assets/paver.jpeg"
    },
    {
      "image": "./assets/paver2.jpeg"
    },
    {
      "image": "./assets/paver3.jpeg"
    }
  ]

  constructor () {}

  ngOnInit(): void {
  }

  goRight () {
    switch(this.notActive) {
      case "notActive":
        this.notActive = "active"
        this.dontShow = "show"
        break
      case "active":
        this.notActive = "active2"
        break
      case "active2":
        this.notActive = 'active3'
        break  
      case "active3":
        this.notActive = 'active4'
        break
      case "active4":
        this.notActive = 'active5'
        this.show = 'dontShow'
        break 
    }
    console.log(this.notActive)
  }

  goLeft() {
      switch(this.notActive) {
        case "active":
          this.notActive = "notActive"
          this.dontShow = 'dontShow'
          break
        case "active2":
          this.notActive = "active"
          break
        case "active3":
          this.notActive = 'active2'
          break  
        case "active4":
          this.notActive = 'active3'
          break
        case "active5":
          this.notActive = 'active4'
          this.show = 'show'
          break 
      }
      console.log(this.notActive)
  }


}
