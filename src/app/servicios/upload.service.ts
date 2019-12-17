import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../clases/proyecto';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  public url:string;
  constructor() {
    
    this.url = global.url;
  }

  enviarImg(url: string, params: Array<string>, files: Array<File>, name: string){
    //resolve es que la promesa se ha resuelto
    //reject es que no se puedo resolver
    return new Promise((resolve, reject) => {
      //simular un formulario
      let formData:any = new FormData();
      let xhr = new XMLHttpRequest();

      for (let index = 0; index < files.length; index++) {
        formData.append(name, files[index], files[index].name)  
      }
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response))
          }
          else{
            reject(xhr.response)
          }
        }
      }
      xhr.open('POST', url, true)
      xhr.send(formData)
    })
  }
}
