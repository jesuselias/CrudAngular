import { Component, OnInit } from '@angular/core';
import { UsersService } from './../shared/services/users.service';
import { HardwareService } from './../shared/services/hardware.service';
import { SoftwareService } from './../shared/services/software.service';
import { AssignmentsService } from './../shared/services/assignments.service';
import { Assignments } from '../shared/services/assignments.model';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-listassignments',
  templateUrl: './listassignments.component.html',
  styleUrls: ['./listassignments.component.css']
})
export class ListassignmentsComponent implements OnInit {
  
  pageActual: number = 1;
  
  constructor(public service: UsersService,
    public hardservice: HardwareService,
    public softservice: SoftwareService,
    public assigservice: AssignmentsService ) 
    {
     }

ngOnInit() {
this.service.refreshList();

this.hardservice.refreshList();

this.softservice.refreshList();

this.resetForm();
}

resetForm(form?: NgForm){
if(form != null)
form.resetForm();
this.assigservice.formData = {
UserID :0,
HardwareID:0,
SoftwareID:0
}
}

insertRecord(form: NgForm) {
this.assigservice.Postassignments(form.value).subscribe(res => {
//this.toastr.success('Inserted successfully', 'EMP. Register');
this.resetForm(form);
//this.assigservice.refreshList(id);
});
}

getiduser(form: NgForm){
this.assigservice.getASigByID(form.value);

}
}
