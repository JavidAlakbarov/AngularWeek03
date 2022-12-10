import { Injectable,OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactive:number = 0;
  inactiveToActive:number = 0;
  constructor() { }
  // ngOnInit(){ }
  updateActive(){this.inactiveToActive++};
  updateInactive(){this.activeToInactive++};
}
