import { Component, Inject, Input } from '@angular/core';
import { Socio } from 'src/app/models/socio';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-socio-password',
  templateUrl: './socio-password.component.html',
  styleUrls: ['./socio-password.component.css']
})
export class SocioPasswordComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { socio: Socio }) { }
}
