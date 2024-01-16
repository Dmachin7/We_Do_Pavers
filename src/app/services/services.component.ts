import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{

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

