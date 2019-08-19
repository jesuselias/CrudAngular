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
      Id :0,
      UserName: '',
      Name:'',
      LastName:'',
      Age:0,
      LastSessionDateTime: ''

    }
  }

  onSubmit(form:NgForm){
    this.service.postUsers(form.value).subscribe(
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
