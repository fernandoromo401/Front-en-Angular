import { Component, OnInit } from '@angular/core';
import { Project } from '../../clases/proyecto';
import { ProyectosService } from '../../servicios/proyectos.service';
import { UploadService } from '../../servicios/upload.service';
import { global } from '../../servicios/global';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [ProyectosService, UploadService]
})
export class FormularioComponent implements OnInit {
  
  public title: string;
  public project: Project;
  public estado: string;
  public imagenSubir: Array<File>
  public detalles;

  constructor(
    private _projectService: ProyectosService,
    private _uploadService: UploadService
  ) { 
    this.title = 'Nuevo Proyecto';
    this.project = new Project('','','','');
    
  }

  ngOnInit() {
  }

  enviar(form){

    this._projectService.save(this.project).subscribe(
      response => {
        
        if (response.project) { 
          
          form.reset();
          //Declaro para mejor refactorizacion
          let ruta = global.url + 'upload-image/'+response.project._id;
          let array = []
          let imagen = this.imagenSubir;
          let cadenaModelo = 'imagen';

          //Subir la imagen
          this._uploadService.enviarImg(ruta, array, imagen, cadenaModelo).then((result:any) =>{
            this.estado = 'si'
            form.reset();
            this.detalles = response.project
          })
         }
        else { this.estado = 'no' }
      },
      error => {
        console.log('Error no esta conectado el servidor')
        this.estado = 'no'
        form.reset();
      }
    )
  }

  fileChangeEvent(fileInput:any){
    this.imagenSubir = <Array<File>>fileInput.target.files
    console.log(fileInput)
  }
}
