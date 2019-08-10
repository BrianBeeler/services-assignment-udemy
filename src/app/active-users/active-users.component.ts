import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  constructor(private usersService: UserService) {}

  users: string[] = this.usersService.activeUsers;

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
