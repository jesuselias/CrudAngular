import { Injectable } from '@angular/core';
import { Users } from './users.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  formData:Users;
  readonly rootURL = 'https://jelias.azurewebsites.net/api';
  list : Users[];

  constructor(private http:HttpClient) { }

  postUsers(formData:Users){
   return this.http.post(this.rootURL+'/users', this.formData);
  }
 
   Deleteusers(id){
     return this.http.delete(this.rootURL+'/users/'+ id);
    }
 
   
   refreshList(){
     this.http.get(this.rootURL + '/users' )
     .toPromise()
     .then(res => this.list = res as Users[]);
   }
}
