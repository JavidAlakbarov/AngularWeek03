import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();
  constructor(private usersService:UsersService){}
  ngOnInit(){
    this.users = this.usersService.activeUsers;
  }
  users:string[]=[];

  onSetToInactive(id: number) {
    this.usersService.addToInactive(id);
    // this.userSetToInactive.emit(id);
  }
}
