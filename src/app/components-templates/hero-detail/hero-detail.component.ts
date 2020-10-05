import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges {

  @Input() hero;

  constructor() { }

  ngOnInit() {
    console.log(this.hero);
  }

  ngOnChanges() {
    console.log(this.hero);
  }

}
