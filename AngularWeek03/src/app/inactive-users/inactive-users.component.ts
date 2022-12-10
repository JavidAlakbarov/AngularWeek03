import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  constructor(private usersService:UsersService){}
  ngOnInit(){
    this.users = this.usersService.inactiveUsers;
  }
  users:string[]=[];
  onSetToActive(id: number) {
    this.usersService.addToActive(id);
    // this.userSetToActive.emit(id);
  }
}
