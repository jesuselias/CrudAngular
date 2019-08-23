import { Component, OnInit } from '@angular/core';
import { UsersService } from './../shared/services/users.service';
import { NgForm} from '@angular/forms'
import { Users } from '../shared/services/users.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private service: UsersService,
    private toastr:ToastrService ) { }

  ngOnInit() {
    this.resetForm();
    this.service.refreshList();
  }

  resetForm(form?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      id :0,
      userName: '',
      name:'',
      lastName:'',
      age:0,
      lastSessionDateTime: '2019-08-05T15:02:29.393'

    }
  }



  onSubmit(form: NgForm) {
    if (form.value.id == 0)
    this.toastr.success('Registrado Exitosamente', 'Usuario. Registrado'),
    this.insertRecord(form);
    else
    this.toastr.success('Modificado Exitosamente', 'Usuario. Modificado'),
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postusers(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putusers(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
     });
  
    }

 
    populateForm(index: Users) {
      this.service.formData = Object.assign({}, index);
      console.log(this.service.formData)
    }   
 


  onDelete(id){
    if(confirm('Esta seguro que quieres eliminar?')){
      this.toastr.error('Elminado Exitosamente', 'Usuario. Eliminado?');
    this.service.Deleteusers(id)
    .subscribe(res =>{
      this.service.refreshList();
    },
      err=>{
        console.log(err);
      })
  }
}

}
