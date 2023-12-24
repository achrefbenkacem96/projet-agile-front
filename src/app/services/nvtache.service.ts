import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// import {Gc} from "../model/gc";
// import {Nvtache} from "../model/Nvtache";
// import {Tache} from "../model/Tache";
import {Observable} from "rxjs";
import {Stat} from "../model/Stat";

@Injectable({
  providedIn: 'root'
})
export class NvtacheService {

  constructor(private httpClient:HttpClient) { }
 

}
