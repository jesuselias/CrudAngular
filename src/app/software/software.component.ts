import { Component, OnInit } from '@angular/core';
import { SoftwareService } from './../shared/services/software.service';
import { NgForm} from '@angular/forms'
import { Software } from '../shared/services/software.model';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {

  constructor( private service: SoftwareService) { }

  pageActual: number = 1;
  ngOnInit() {
    this.resetForm();
    this.service.refreshList();
    
  }
  resetForm(form?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      Id :null,
      SoftwareName: '',
    }
  }

  onSubmit(form:NgForm){
    this.service.Postsoftware(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err =>{
        console.log(err);
      }
    )
  }

  populateForm(index: Software, i:number) {
    //this.service.formData = Object.assign({}, index);
    console.log(this.service.formData)
    this.service.refreshList=this.service.refreshList[i];
  }


  onDelete(id){
    if(confirm('Esta seguro que quieres eliminar')){
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
