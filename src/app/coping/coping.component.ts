import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coping',
  templateUrl: './coping.component.html',
  styleUrls: ['./coping.component.css']
})
export class CopingComponent implements OnInit {
  images: any[] = [
    {
      "image": "./assets/coping/Coping1.jpeg"
    },
    {
      "image": "./assets/coping/Coping2.jpeg"
    },
    {
      "image": "./assets/coping/Coping4.jpeg"
    },
    {
      "image": "./assets/coping/Coping5.jpeg"
    },
    {
      "image": "./assets/coping/Coping6.jpeg"
    },
    {
      "image": "./assets/coping/Coping8.jpeg"
    },
    {
      "image": "./assets/coping/Coping9.jpeg"
    },
    {
      "image": "./assets/coping/Coping10.jpeg"
    }
  ]

  constructor () {}

  onClose() {
    window.scrollTo({
      top: 1400,
      left: 100,
      behavior: "smooth"
    })
  }

  ngOnInit(): void {
    window.scrollTo({
      top: 2010,
      left: 100,
      behavior: "smooth",
    });
  }
}
