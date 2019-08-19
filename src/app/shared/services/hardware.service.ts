import { Injectable } from '@angular/core';
import { Hardware } from './hardware.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  formData:Hardware;
  readonly rootURL = 'https://jelias.azurewebsites.net/api';
  list : Hardware[];

  constructor(private http:HttpClient) { }

  Posthardware(formData:Hardware){
   return this.http.post(this.rootURL+'/hardware',formData);
  }

  Deletehardware(id){
    return this.http.delete(this.rootURL+'/hardware/'+ id);
   }

  
  refreshList(){
    this.http.get(this.rootURL + '/hardware' )
    .toPromise()
    .then(res => this.list = res as Hardware[]);
  }


  putHardware(formData : Hardware){
    return this.http.put(this.rootURL+'/hardware/'+ formData.id,formData);
     
   }


}
