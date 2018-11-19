import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
import { IComponentData } from './icomponent-data';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  private _url: string = "/assets/componentdata.json";
  response:IComponentData[];
  constructor(private http: HttpClient) {}

  getComponentData():Observable<IComponentData[]>{
    return this.http.get<IComponentData[]>(this._url);
  }
}
