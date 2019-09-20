import { Component, OnInit } from '@angular/core';
import { UsersService } from './../shared/services/users.service';
import { NgForm} from '@angular/forms'
import { Users } from '../shared/services/users.model';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  
  pageActual: number = 1;
  constructor( public service: UsersService) { }

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

  onSubmit(form:NgForm){
    this.service.postusers(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err =>{
        console.log(err);
      }
    )
  }

  populateForm(pd:Users){
    this.service.formData = Object.assign({},pd);
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
