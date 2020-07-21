import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonDataTree } from 'src/app/models/json-data-tree';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  path:string = '../../assets/json/data.json';
  jsonDataTree:any = [];

  constructor(private httpClient: HttpClient) { }
  
  getData(): Observable<JsonDataTree[]>{
    return this.httpClient.get<JsonDataTree[]>(this.path);
  }
}
