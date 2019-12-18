import { Component, OnInit } from '@angular/core';
import { UserService } from './../shared/services/user.service';
import { NgForm} from '@angular/forms'
import { User } from '../shared/services/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  constructor(public service: UserService) { }

  ngOnInit() {
  this.resetForm();
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

    insertRecord(form: NgForm) {
    this.service.postusers(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

}
