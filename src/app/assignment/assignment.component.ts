import { Component, OnInit } from '@angular/core';
import { UsersService } from './../shared/services/users.service';
import { HardwareService } from './../shared/services/hardware.service';
import { SoftwareService } from './../shared/services/software.service';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor(private service: UsersService,
              private hardservice: HardwareService,
              private softservice: SoftwareService ) { }

  ngOnInit() {
    this.service.refreshList();
  
    this.hardservice.refreshList();

    this.softservice.refreshList();
  }

}
