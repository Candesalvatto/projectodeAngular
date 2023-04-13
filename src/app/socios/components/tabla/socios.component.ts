import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LoguinService } from 'src/app/inicio-sesion/services/loguin.service';
import { Sesion } from 'src/app/models/sesion';
import { Socio } from 'src/app/models/socio';
import { ServicesSociosService } from 'src/app/socios/service/services-socios.service';
import { eliminarSocioState } from '../../state/socio-state.actions';
import { EditarSociosComponent } from '../editar-socios/editar-socios.component';
import { socioState } from '../../state/socio-state.reducer';
import { selectorCargandoSocios } from '../../state/socio-state.selectors';
import { Store } from '@ngrx/store';
import { loadStateFeatures } from 'src/app/cursos/state/state-feature.actions';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit, OnDestroy {



  suscript!: Subscription;
  dataSource!: MatTableDataSource <Socio>;
  columnas: string[] = ['nombre', 'direccion', 'dni', 'pais', 'ciudad', 'telefono','email','matricula'];
  socio!: Socio[];
  socios$!:Observable<Socio[]>;
  sesion$!: Observable<Sesion>;
  loadind$!: Observable<Boolean>;


  constructor(
    private servicesDeSocios:ServicesSociosService,
    private router: Router,
    private sesionService: LoguinService,
    private dialog: MatDialog,
   private store: Store<socioState>,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.socios$ = this.servicesDeSocios.obtenerSocio() ;
    this.sesion$ = this.sesionService.obtenerSesion();
    this.loadind$ =this.store.select(selectorCargandoSocios);
    this.store.dispatch(loadStateFeatures());

this.dataSource = new MatTableDataSource<Socio>();
this.suscript = this.servicesDeSocios.obtenerSocio().subscribe((socios: Socio[]) => {
  this.dataSource.data = socios;
});
}


ngOnDestroy(){
  this.suscript.unsubscribe();
}


goEdit(socio: Socio){
this.dialog.open(EditarSociosComponent, {
  data: socio
}).afterClosed().subscribe((socio: Socio) => {
  this.socios$ = this.servicesDeSocios.obtenerSocio();
});
};

deleteSocio(socio: Socio) {
    this.store.dispatch(eliminarSocioState({ socio }))
}

}

