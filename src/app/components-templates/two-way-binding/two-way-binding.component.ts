import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  currentHero = {
    name: 'John Doe'
  };

  constructor() { }

  ngOnInit() {
  }

  setUpperCase(value) {
    this.currentHero.name = value.toUpperCase();
  }

  printEvent(e) {
    console.log(e);
  }

  checkHeroName() {
    console.log(this.currentHero.name);
  }

}

