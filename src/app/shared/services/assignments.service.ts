import { Injectable } from '@angular/core';
import { Assignments } from './assignments.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  
  formData:Assignments;
  readonly rootURL = 'https://jelias.azurewebsites.net/api';
  list : Assignments[];

  constructor(private http:HttpClient) { }

  Postassignments(formData:Assignments){
   return this.http.post(this.rootURL+'/assignments',formData);
  }

  putassignments(formData : Assignments){
    return this.http.put(this.rootURL+'/assignments'+formData.UserID,formData);
     
   }

  Deleteassignments(formData : Assignments){
    return this.http.post(this.rootURL+'/assignments/users/'+formData.UserID,formData);
   }

  
   getASigByID(formData:Assignments) {
    this.http.get(this.rootURL + '/assignments/users/'+formData.UserID)
    .toPromise()
    .then(res => this.list = res as Assignments[]);
  }

  

}
