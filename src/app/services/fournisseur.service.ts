import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor( public httpClient:HttpClient) { }
  getAll():Observable<any>{
    return this.httpClient.get("http://localhost:8084/Fournisseur/retrieve-all-fournisseur");
  }
 
  addFournisseur(data: any) {
    return this.httpClient.post("http://localhost:8084/Fournisseur/Addfournisseur", data);
  }
  updateFournisseur(id:number , data:any ){
    return this.httpClient.put("http://localhost:8084/Fournisseur/modifyfournisseur/"+id,data)
  }
  removeFournisseur(id:number){
    return this.httpClient.delete("http://localhost:8084/Fournisseur/remove-fournisseur"+id)
  }
}
