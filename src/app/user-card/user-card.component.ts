import { Component } from '@angular/core';
import { User } from '../models/User.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  allUsers: User[] = [];

  constructor() {
    const User1 = new User(1,'John Doe', 30, ['football', 'basketball', 'gaming']);
    const User2 = new User(2,'Peter Smith', 25, ['swimming', 'gaming']);
    const User3 = new User(3,'Roger Delarue', 20, ['reading', 'swimming']);
    const User4 = new User(4,'Alonso Roy', 15, ['gaming', 'sports']);
    const User5 = new User(5,'Hela Vita', 34, ['painting', 'reading']);

    this.allUsers.push(User1, User2, User3, User4, User5);
  }

  deleteUser(user: User) {
    const index = this.allUsers.indexOf(user);
      this.allUsers.splice(index, 1);
  }
}