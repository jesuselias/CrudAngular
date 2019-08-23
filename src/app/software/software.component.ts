import { Component, OnInit } from '@angular/core';
import { SoftwareService } from './../shared/services/software.service';
import { NgForm} from '@angular/forms'
import { Software } from '../shared/services/software.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {
  
  isValid: boolean = true;

  constructor( private service: SoftwareService,
    private toastr:ToastrService) { }

  pageActual: number = 1;
  ngOnInit() {
    this.resetForm();
    this.service.refreshList();
    
    
  }

  validateForm() {
    this.isValid = true;
    if (this.service.formData.id == 0)
      this.isValid = false;
    else if (this.service.refreshList.length == 0)
      this.isValid = false;
    return this.isValid;
  }

  resetForm(form?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      id :0,
      softwareName: '',

    }
  }

  onSubmit(form: NgForm) {
    if (form.value.id == 0)
    this.toastr.success('Registrado Exitosamente', 'Software. Registrado'),
    this.insertRecord(form);
    else
    this.toastr.success('Modificado Exitosamente', 'Software. Modificado'),
      this.updateRecord(form);
  }
  
  insertRecord(form: NgForm) {
    this.service.Postsoftware(form.value).subscribe(res => {
      //this.toastr.success('Inserted successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putsoftware(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
     });
  }


  populateForm(index: Software) {
    this.service.formData = Object.assign({}, index);
    console.log(this.service.formData)
  }


  onDelete(id){
    if(confirm('Esta seguro que quieres eliminar')){
    this.toastr.error('Elminado Exitosamente', 'Software. Eliminado?');
    this.service.Deletesoftware(id)
    .subscribe(res =>{
      this.service.refreshList();
    },
      err=>{
        console.log(err);
      })
  }
}

}
