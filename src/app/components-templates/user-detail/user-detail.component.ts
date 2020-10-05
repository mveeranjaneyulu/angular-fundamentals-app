import { Component, OnInit, ContentChild } from '@angular/core';
import { from } from 'rxjs';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user = {
    name: 'John',
    age: 25
  };

  @ContentChild(EditUserComponent) 
  editUserContent: EditUserComponent;

  ngAfterContentInit() {
    console.log(this.editUserContent.version);
  }

}
