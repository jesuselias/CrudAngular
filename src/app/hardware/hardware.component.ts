import { Component, OnInit } from '@angular/core';
import { HardwareService } from './../shared/services/hardware.service';
import { NgForm} from '@angular/forms'
import { Hardware } from '../shared/services/hardware.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit {
  Hardware: any;
  pageActual: number = 1;
  
  constructor( public service: HardwareService,
    public toastr: ToastrService) {
    this.Hardware =[];
   }

  ngOnInit() {
    this.resetForm();
    this.service.refreshList();
  }
  resetForm(form?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      id :0,
      hardwareName: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.id == 0)
    this.toastr.success('Registrado Exitosamente', 'Hardware. Registrado'),
    this.insertRecord(form);
    else
    this.toastr.success('Modificado Exitosamente', 'Hardware. Modificado'),
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.Posthardware(form.value).subscribe(res => {
      //this.toastr.success('Inserted successfully', 'Hardware. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

 
      populateForm(index: Hardware) {
        this.service.formData = Object.assign({}, index);
        console.log(this.service.formData)
      }
 

  onDelete(id){
    if(confirm('Esta seguro que quieres eliminar?')){
    this.toastr.error('Elminado Exitosamente', 'Hardware. Eliminado');
    this.service.Deletehardware(id)
    .subscribe(res =>{
      this.service.refreshList();
    },
      err=>{
        console.log(err);
      })
    }
  }

  updateRecord(form: NgForm) {
  this.service.putHardware(form.value).subscribe(res => {
    this.resetForm(form);
    this.service.refreshList();
   });

  }


}
