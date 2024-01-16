import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
      "image": "./assets/plaster/Plaster4.jpeg"
    },
    {
      "image": "./assets/plaster/Plaster5.jpeg"
    } 
  ]

  constructor (private activatedRoute: ActivatedRoute) {}



  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value) => {
      this.jumpTo(value)
    })
}

jumpTo(section: any) {
  document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
}
}
