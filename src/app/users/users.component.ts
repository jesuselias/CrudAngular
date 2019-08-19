import { Component, OnInit } from '@angular/core';
import { UsersService } from './../shared/services/users.service';
import { NgForm} from '@angular/forms'
import { Users } from '../shared/services/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private service: UsersService ) { }

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
      lastSessionDateTime: ''

    }
  }



  onSubmit(form: NgForm) {
    if (form.value.id == 0)
    this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postusers(form.value).subscribe(res => {
      //this.toastr.success('Inserted successfully', 'EMP. Register');
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
    if(confirm('Esta seguro que quieres eliminar')){
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
