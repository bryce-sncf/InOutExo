import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/User.model';



@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss']
})
export class UserStatsComponent {
@Input() userChild: User = new User(0,"",0,[]);
@Output() deleteUserEvent: EventEmitter<User> = new EventEmitter<User>();


deleteUserChild(user: User) {
  this.deleteUserEvent.emit(user);
}
}