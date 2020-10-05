import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { CountingService } from '../counting.service';

@Component({
  selector: 'app-display-count',
  templateUrl: './display-count.component.html',
  styleUrls: ['./display-count.component.css']
})
export class DisplayCountComponent implements OnInit {

  count: number;
  
  constructor(private countingService: CountingService) { }

  ngOnInit() {
    this.countingService.counter$.subscribe(val => this.count = val);
  }

}
