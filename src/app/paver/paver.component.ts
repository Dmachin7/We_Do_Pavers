import { Component, OnInit } from '@angular/core';
import { animate, state } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-paver',
  templateUrl: './paver.component.html',
  styleUrls: ['./paver.component.css']
})
export class PaverComponent implements OnInit {

  images: any[] = [
    {
      "image": "./assets/paver/Paver1.jpeg"
    },
    {
      "image": "./assets/paver/Paver2.jpeg"
    },
    {
      "image": "./assets/paver/Paver4.jpeg"
    },
    {
      "image": "./assets/paver/Paver5.jpeg"
    },
    {
      "image": "./assets/paver/Paver6.jpeg"
    },
    {
      "image": "./assets/paver/Paver7.jpeg"
    },
    {
      "image": "./assets/paver/Paver9.jpeg"
    },
    {
      "image": "./assets/paver/Paver10.jpeg"
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
