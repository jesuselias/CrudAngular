import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData:User;
  readonly rootURL = 'http://www.mocky.io/v2/5df113c33100000f008f0dcc';
  list : User[];

  constructor(public http:HttpClient) { }

  postuser(formData:User){
   return this.http.post(this.rootURL+'/users', this.formData);
  }

  putuser(formData : User){
    return this.http.put(this.rootURL+'/users/'+ formData.id,formData);
     
   }
 
   Deleteuser(id){
     return this.http.delete(this.rootURL+'/users/'+ id);
    }
 
   
   refreshList(){
     this.http.get(this.rootURL + '/users' )
     .toPromise()
     .then(res => this.list = res as User[]);
   }
}
