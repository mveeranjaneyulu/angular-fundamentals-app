import { Component, OnInit, Input, SimpleChanges, OnChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-cycle',
  templateUrl: './user-cycle.component.html',
  styleUrls: ['./user-cycle.component.css']
})
export class UserCycleComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() user;

  constructor() { 
    console.log('1. Input properties not available in constructor - ' + this.user);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("2. Component OnChanges");
    console.log('Input properties first available in ngOnChanges');
    console.log(changes);
    console.log(this.user);
  }

  ngOnInit() {
    console.log("3. Component Created");
    //this.usersSubscriber = this.userService.getUSers().subscribe(users => {});
  }

  ngDoCheck() {
    console.log("4. Component DoCheck");
    console.log(this.user.name)
  }

  ngOnDestroy() {
    console.log("5. Component Destroyed");
    //this.usersSubscriber.unSubscribe();
  }

}
