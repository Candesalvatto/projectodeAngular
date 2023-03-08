import { Component, OnInit } from '@angular/core';
import {Alumno} from 'src/app/models/alumnos';
import { Socio } from 'src/app/models/socio';
import {ServiceAlumnoService} from 'src/app/services/service-alumno.service';
import { ServicesSociosService } from 'src/app/services/services-socios.service';


@Component({
  selector: 'app-section-alumnos',
  templateUrl: './section-alumnos.component.html',
  styleUrls: ['./section-alumnos.component.css']
})
export class SectionAlumnosComponent implements OnInit{

  listaAlumnos!:Alumno[];
  listaSocios! : Socio [];


  constructor(
    private servicesDeAlumnos:ServiceAlumnoService,
    private serviceDeSocios: ServicesSociosService,
  ){}

  ngOnInit(): void {
  this.listaAlumnos= this.servicesDeAlumnos.obtenerAlumno()
  this.listaSocios=this.serviceDeSocios.obtenerSocio()
  }




}

