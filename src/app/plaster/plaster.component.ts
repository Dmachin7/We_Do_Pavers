import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plaster',
  templateUrl: './plaster.component.html',
  styleUrls: ['./plaster.component.css']
})
export class PlasterComponent implements OnInit {

  images: any[] = [
  
    {
      "image": "./assets/plaster/Plaster1.jpeg"
    },
    {
      "image": "./assets/plaster/Plaster2.jpeg"
    },
    {
      "image": "./assets/plaster/Plaster3.jpeg"
    },
    {
      "image": "./assets/plaster/Plaster4.jpeg"
    },
    {
      "image": "./assets/plaster/Plaster5.jpeg"
    },
    {
      "image": "./assets/plaster/Plaster6.jpeg"
    },
    {
      "image": "./assets/plaster/Plaster7.jpeg"
    },
    {
      "image": "./assets/plaster/Plaster8.jpeg"
    }
  ]

  constructor () {}

  ngOnInit(): void {
      window.scrollTo(0,0)
  }
}
