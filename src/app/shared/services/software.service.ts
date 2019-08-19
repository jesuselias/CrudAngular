import { Injectable } from '@angular/core';
import { Software } from './software.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  formData:Software;
  readonly rootURL = 'https://jelias.azurewebsites.net/api';
  list : Software[];

  constructor(private http:HttpClient) { }

  Postsoftware(formData:Software){
   return this.http.post(this.rootURL+'/software',formData);
  }

  putsoftware(formData : Software){
    return this.http.put(this.rootURL+'/software/'+formData.id,formData);
     
   }

  Deletesoftware(id){
    return this.http.delete(this.rootURL+'/software/'+ id);
   }

  
  refreshList(){
    this.http.get(this.rootURL + '/software' )
    .toPromise()
    .then(res => this.list = res as Software[]);
  }
}
