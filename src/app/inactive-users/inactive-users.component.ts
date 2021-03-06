import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  constructor(private usersService: UserService) {}

  users: string[] = this.usersService.inactiveUsers;
  
  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
