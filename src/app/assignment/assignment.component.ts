import { Component, OnInit } from '@angular/core';
import { UsersService } from './../shared/services/users.service';
import { HardwareService } from './../shared/services/hardware.service';
import { SoftwareService } from './../shared/services/software.service';
import { AssignmentsService } from './../shared/services/assignments.service';
import { Assignments } from '../shared/services/assignments.model';
import { NgForm} from '@angular/forms'


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor(private service: UsersService,
              private hardservice: HardwareService,
              private softservice: SoftwareService,
              private assigservice: AssignmentsService ) 
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

  resetFormd(form?: NgForm){
    if(form != null)
    form.resetForm();
    this.assigservice.formData = {
      UserID: this.assigservice.formData.UserID,
      SoftwareID: this.assigservice.formData.SoftwareID,
      HardwareID: this.assigservice.formData.HardwareID,
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
      console.log(this.assigservice.formData);
  }

  onDelete(formd: NgForm,index){
    if(confirm('Esta seguro que quieres eliminar?')){
    this.assigservice.formData.HardwareID = this.assigservice.list[index].HardwareID;
    this.assigservice.formData.SoftwareID = this.assigservice.list[index].SoftwareID;
      this.assigservice.Deleteassignments(formd.value).subscribe(res => {
        //this.toastr.success('Inserted successfully', 'EMP. Register');
        this.resetForm(formd);
        console.log(this.assigservice.formData);
        //this.assigservice.refreshList(id);
      console.log();
    });
  }
  }

 /* onDelete(index) {
    this.assigservice.formData.HardwareID = this.assigservice.list[index].HardwareID;
    this.assigservice.formData.SoftwareID = this.assigservice.list[index].SoftwareID;
    console.log(this.assigservice.formData);
    let postAss = {
      "UserID": this.assigservice.formData.UserID,
      "softwareID": this.assigservice.formData.SoftwareID,
      "hardwareID": this.assigservice.formData.HardwareID,
    };
    this.assigservice.Deleteassignments(postAss);
    
 
  }*/
}
