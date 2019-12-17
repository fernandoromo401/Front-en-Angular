import { Component, OnInit } from '@angular/core';
import { Project } from '../../clases/proyecto';
import { ProyectosService } from '../../servicios/proyectos.service';
import { global } from '../../servicios/global';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  providers: [ProyectosService]
})
export class ProyectosComponent implements OnInit {
  public projectsVar: Project[];
  public url = global.url;

  constructor(
    private _projectService: ProyectosService,
  ){}

  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getAll().subscribe(
      response => {
        
        if (response.projects) {
          this.projectsVar = response.projects
        }
      },
      error => {
        console.log(error)
      }
    )
  }

}
