import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../clases/proyecto';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  
  public url:string;
  constructor(private _http: HttpClient ) {
    this.url = global.url;
   }
   
   save(project: Project):Observable<any>{
    let guardar =  this._http.post(this.url+'save' , project);
    return guardar
  }

  getAll():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json')
    let mostrar = this._http.get(this.url+'getAll', { headers: headers})
    
    return mostrar;
  }

  getOne(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json')
    let mostrar = this._http.get(this.url+'getID/'+id, { headers: headers})
    
    return mostrar;
  }

  delete(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json')
    let mostrar = this._http.delete(this.url+'delete/'+id, { headers: headers})
    return mostrar
  }
  
}


  