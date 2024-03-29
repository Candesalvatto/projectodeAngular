import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { LoguinService } from 'src/app/inicio-sesion/services/loguin.service';
import { Sesion } from 'src/app/models/sesion';
import { Socio } from 'src/app/models/socio';
import { ServicesSociosService } from 'src/app/socios/service/services-socios.service';
import { eliminarSocioState, finishSocioState, loadSocioStates } from '../../state/socio-state.actions';
import { EditarSociosComponent } from '../editar-socios/editar-socios.component';
import { socioState } from '../../state/socio-state.reducer';
import { selectorCargandoSocios, selectorSociosCargados } from '../../state/socio-state.selectors';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../../inicio-sesion/state/auth.reducer';
import { SocioPasswordComponent } from '../socio-password/socio-password.component';


@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit, OnDestroy {



  suscript!: Subscription;
  dataSource!: MatTableDataSource <Socio>;
  columnas: string[] = ['nombre', 'direccion', 'dni', 'pais', 'ciudad', 'telefono','email','matricula', 'acciones'];
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
    this.dataSource = new MatTableDataSource<Socio>();
      this.sesion$= this.sesionService.obtenerSesion()
      this.store.dispatch(loadSocioStates());
 this.store.select(selectorSociosCargados).subscribe((socios: Socio[])=>{   this.dataSource.data = socios;})


}


ngOnDestroy(){
  if (this.suscript) {
    this.suscript.unsubscribe();
  }
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
openDialog(socio: Socio) {
  const dialogRef = this.dialog.open(SocioPasswordComponent, {
    data: { socio: socio }
  });
}
}



