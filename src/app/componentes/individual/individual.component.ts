import { Component, OnInit } from '@angular/core';
import { Project } from '../../clases/proyecto';
import { ProyectosService } from '../../servicios/proyectos.service';
import { global } from '../../servicios/global';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css'],
  providers: [ ProyectosService ]
})
export class IndividualComponent implements OnInit {

  public url;
  public project

  constructor(
    private _service: ProyectosService,
    private _router: Router,
    private _route: ActivatedRoute
    ) 
  {
      this.url = global.url
  }

  ngOnInit() {
    this._route.params.subscribe(
      params => {
        let idUrl = params.id;
        
        this.getOne(idUrl)
      }
    )
  }

  getOne(id){
    this._service.getOne(id).subscribe(
      response => {
        this.project = response.project
      },
      error => {
        console.log(error)
      }
    )
  }

  delete(id){
    this._service.delete(id).subscribe(
      response => {
        if (response.project) {
          this._router.navigate(['/proyectos'])
        }
      },
      error => {
        console.log(error)
      })
  }

}
