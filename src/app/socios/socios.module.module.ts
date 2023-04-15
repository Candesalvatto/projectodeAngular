import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ServicesSociosService } from './service/services-socios.service';
import { EffectsModule } from '@ngrx/effects';
import { SocioStateEffects } from './state/socio-state.effects';
import { EditarSociosComponent } from './components/editar-socios/editar-socios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { SociosComponent } from './components/tabla/socios.component';
import { DataSociosComponent } from './components/data/data-socios.component';
import { StoreModule } from '@ngrx/store';
import { reducer, socioStateFeatureKey } from './state/socio-state.reducer';
import { SociosRountingModule } from './socios-rounting.module';
import { FormSociosComponent } from './components/form-socios/form-socios.component';
import { SocioPasswordComponent } from './components/socio-password/socio-password.component';






@NgModule({
  declarations: [
    EditarSociosComponent,
    SociosComponent,
    DataSociosComponent,
    FormSociosComponent,
    SocioPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    SociosRountingModule,
    StoreModule.forFeature(socioStateFeatureKey, reducer),
    EffectsModule.forFeature([SocioStateEffects])
  ],
  exports:[HttpClientModule,
    FormSociosComponent],

  providers:[ServicesSociosService],
})
export class SociosModuleModule { }
