import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoTrackerService {

  constructor(private http: HttpClient) { }

  private todoSubject = new Subject();

  public todoObservable$ = this.todoSubject.asObservable();

  track(todo) {
    let action = `${todo.title} is ${todo.done ? `` : `not`} completed`;
    this.todoSubject.next(action);
    
    /* Getting data from local json file */
    /* this.http.get('assets/todos.json').subscribe(data => {
      console.log(data);
    }); */
  }

}
